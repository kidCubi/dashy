import React from 'react';
import classNames from 'classnames';
import styles from './Agenda.module.scss';

const AgendaEntry = (props) => {
    let classPriority = "";
    switch (props.label) {
        case "daily":
            classPriority = styles.Daily;
            break;
        case "normal":
            classPriority = styles.Normal;
            break;
        case "urgent":
            classPriority = styles.Urgent;
            break;
        default:
            classPriority = ""
    }

    const classes = classNames(
        classPriority,
        styles.Entry
    );

    let participantsArr = [];
    let leftParticipants = null;
    if (props.participants.length >= 3) {
        participantsArr = props.participants.slice(0, 2).map((value, index) => {
            leftParticipants = <li className={styles.LeftParticipants}>+{props.participants.length - 2}</li>;
            return (
                <li
                    className={styles.Participant}
                    style={{ backgroundImage: `url(${value})` }}
                    key={index}
                />
            )
        });
    } else {
        participantsArr = props.participants.map((value, index) => {
            return (
                <li
                    className={styles.Participant}
                    style={{ backgroundImage: `url(${value})` }}
                    key={index}
                />
            )
        })
    }

    return (
        <div className={classes}>
            <span className={styles.Hour}>{props.hour}</span>
            <ul className={styles.Participants}>
                {leftParticipants}
                {participantsArr}
            </ul>
            <span className={styles.EventName}>{props.eventName}</span>
        </div>
    );
};

export default AgendaEntry;
