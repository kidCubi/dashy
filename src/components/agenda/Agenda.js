import React, { Component } from 'react';
import styles from './Agenda.module.scss';

import AgendaEntry from "./AgendaEntry";

import { connect } from 'react-redux';
import { setAgendaLoaded } from '../../redux/actions/index'

const mapState = state => ({
    app: state.app,
});

const mapActions = dispatch => ({
    setAgendaLoaded: (loaded) => dispatch(setAgendaLoaded(loaded))
});

class Agenda extends Component {
    constructor() {
        super();
        this.today = new Date().getUTCDate();
        this.indents = [];
    }

    componentDidMount() {
        fetch("./assets/json/agenda.json")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    this.indents.push(<AgendaEntry
                        eventName={data[i].title}
                        hour={data[i].hour}
                        label={data[i].label}
                        participants={data[i].participants}
                        key={i}
                    />);
                }
                this.props.setAgendaLoaded(true);
            })
    }

    render() {
        return (
            <div className={styles.Wrapper}>
                <div className={styles.Heading}>
                    <span className={styles.IconToday}>{this.today}</span>
                    <span className={styles.Title}>Today</span>
                </div>
                {this.props.app.modulesLoaded.agendaLoaded &&
                <div className={styles.Entries}>
                    {this.indents}
                </div>
                }
                {this.props.children}
            </div>
        );
    }
}

export default connect(mapState, mapActions)(Agenda);
