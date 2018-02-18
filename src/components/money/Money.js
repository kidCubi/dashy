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
            <div className={styles.Wrapper}>
                <p> Money </p>
                <span>{this.totalBalance} CHF</span>
                {this.props.app.moneyLoaded &&
                <LineChart
                    data={this.data}
                    width={600}
                    height={300}
                    id="chart_v1"
                />
                }
                {this.props.children}
            </div>
        );
    }
}

export default connect(mapState, mapActions)(Money);

