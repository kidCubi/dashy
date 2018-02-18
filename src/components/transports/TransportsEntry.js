import React from 'react';

const TransportsEntry = (props) => {

    const departureMinutes = "0" + new Date(props.departure * 1000).getMinutes();
    const dateNowMinutes = "0" + new Date(new Date().getTime() / 1000 * 1000).getMinutes();
    departureMinutes.substr(-2);
    dateNowMinutes.substr(-2);
    const result = (departureMinutes - dateNowMinutes < 0) ? 60 + (departureMinutes - dateNowMinutes) : (departureMinutes - dateNowMinutes);

    return (
        <div>
            <span>{props.number}</span>
            <span>{props.destination}</span>
            <span>{result}min</span>
        </div>
    );
};

export default TransportsEntry;
