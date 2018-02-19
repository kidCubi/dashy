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
    }

    componentDidMount() {
        setTimeout(() => {
            console.log(this.refMoneyWrapper.getBoundingClientRect().height)
        },3000)
        fetch("./assets/json/money.json")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.data = data;
                const amount = this.data[this.data.length - 1].amount;
                this.totalBalance = (amount > 0) ? `+${amount}` : `-${amount}`;
                this.props.setMoneyLoaded(true);
            })
    }

    render() {
        return (
            <div className={styles.Wrapper} ref={(node) => {
                this.refMoneyWrapper = node
            }}>
                <div className={styles.Heading}>
                    <span className={styles.HeadingIcon}></span>
                    <span>{this.totalBalance} CHF</span>
                </div>
                {this.props.app.moneyLoaded &&
                <LineChart
                    data={this.data}
                    width={this.refMoneyWrapper.getBoundingClientRect().width}
                    height={this.refMoneyWrapper.getBoundingClientRect().height / 1.35}
                    id="chart_v1"
                />
                }
                {this.props.children}
            </div>
        );
    }
}

export default connect(mapState, mapActions)(Money);

