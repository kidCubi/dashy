import React from 'react';
import styles from './Transports.module.scss';

const TransportsEntry = (props) => {
    const departureMinutes = "0" + new Date(props.departure * 1000).getMinutes();
    const dateNowMinutes = "0" + new Date(new Date().getTime() / 1000 * 1000).getMinutes();
    departureMinutes.substr(-2);
    dateNowMinutes.substr(-2);
    const result = (departureMinutes - dateNowMinutes < 0) ? 60 + (departureMinutes - dateNowMinutes) : (departureMinutes - dateNowMinutes);
    if (props.index === 0) {
       return (
           //NICE TO HAVE : Ajouter géoloc
           <div className={styles.Heading}>
               <span className={styles.HeadingIcon}></span>
               <span className={styles.HeadingTime}>~{result}min</span>
           </div>
       )
    } else {
        return (
            <div className={styles.Entry}>
                <span className={styles.Number}>{props.number}</span>
                <span className={styles.Destination}>{props.destination}</span>
                <span className={styles.Time}>{result}min</span>
            </div>
        );
    }
};

export default TransportsEntry;
