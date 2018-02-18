import React from 'react';
import { kelvinToCelcius, getWeekDay } from "../../helpers";
import { WEEK_DAYS } from "../../const";

const Day = (props) => {
    const temp = Math.round(kelvinToCelcius(props.data.main.temp));
    const day = WEEK_DAYS[getWeekDay(props.data.dt)].substr(0, 3);
    if (props.index === 0) {
        return (
            <div>
                <span className={props.data.weather[0].main}></span>
                <span>{temp}°</span>
            </div>
        )
    } else {
        return (
            <div>
                <span>{day}</span>
                <span className={props.data.weather[0].main}></span>
                <span>{temp}°</span>
            </div>
        )
    }
};

export default Day;
