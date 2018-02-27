import React, { Component } from 'react';
import styles from './Money.module.scss';
import LineChart from './chart/LineChart';

import { connect } from 'react-redux';
import { setMoneyLoaded } from '../../redux/actions/index'

const mapState = state => ({
    app: state.app,
});

const mapActions = dispatch => ({
    setMoneyLoaded: (loaded) => dispatch(setMoneyLoaded(loaded))
});

class Money extends Component {
    constructor() {
        super();
        this.data = null;
        this.totalBalance = 0;
        this.state = {
            width: 0,
            height: 0
        };
        this.raf = this.raf.bind(this);
    }

    componentDidMount() {
        fetch("./assets/json/money.json")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.data = data;
                const amount = this.data[this.data.length - 1].amount;
                this.totalBalance = (amount > 0) ? `+${amount}` : `-${amount}`;
                this.props.setMoneyLoaded(true);
            });
        this.setState(state => ({
            width: this.refMoneyWrapper.getBoundingClientRect().width,
            height: this.refMoneyWrapper.getBoundingClientRect().height
        }));
        this.raf();
        window.addEventListener('resize', () => {
            this.isResizing = true;
        });
    }

    raf() {
        requestAnimationFrame(this.raf);
        if (this.isResizing) {
            this.setState(state => ({
                width: this.refMoneyWrapper.getBoundingClientRect().width,
                height: this.refMoneyWrapper.getBoundingClientRect().height
            }));
            this.isResizing = false;
        }
    }

    render() {
        return (
            <div className={styles.Wrapper} ref={(node) => {
                this.refMoneyWrapper = node
            }}>
                <div className={styles.Heading}>
                    <span className={styles.HeadingIcon}/>
                    <span>{this.totalBalance} CHF</span>
                </div>
                {this.props.children}
                {this.props.app.modulesLoaded.moneyLoaded &&
                <LineChart
                    data={this.data}
                    width={this.state.width}
                    height={this.state.height / 1.35}
                    id="money_chart"
                />
                }
            </div>
        );
    }
}

export default connect(mapState, mapActions)(Money);

