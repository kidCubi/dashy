import React, { Component } from 'react';
import TransportsEntry from './TransportsEntry';
import styles from './Transports.module.scss';

import { connect } from 'react-redux';
import { setTransportsLoaded } from '../../redux/actions/index'

const mapState = state => ({
    app: state.app,
});

const mapActions = dispatch => ({
    setTransportsLoaded: (loaded) => dispatch(setTransportsLoaded(loaded))
});

class Transports extends Component {
    constructor() {
        super();
        this.indents = [];
    }

    componentDidMount() {
        fetch("http://transport.opendata.ch/v1/stationboard?station=Erlenbach&limit=4")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                for (let i = 0; i < data.stationboard.length; i++) {
                    this.indents.push(<TransportsEntry
                        number={data.stationboard[i].category + data.stationboard[i].number}
                        destination={data.stationboard[i].to}
                        departure={data.stationboard[i].stop.departureTimestamp}
                        key={i}
                    />)
                }
                this.props.setTransportsLoaded(true);
            })

    }

    render() {
        //Note : disons que dans le backend, l'utilisateur aura sélectionné 4 stations favorites
        return (
            <div className={styles.Wrapper}>
                {this.props.app.transportsLoaded &&
                <div>
                    {this.indents}
                </div>
                }
                {this.props.children}
            </div>
        );
    }
}

export default connect(mapState, mapActions)(Transports);

