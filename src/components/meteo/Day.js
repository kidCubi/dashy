import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Meteo.module.scss';
import { kelvinToCelcius, getWeekDay } from "../../helpers";
import { WEEK_DAYS } from "../../const";

const Day = (props) => {
    const temp = Math.round(kelvinToCelcius(props.temp));
    const day = WEEK_DAYS[getWeekDay(props.day)].substr(0, 3);
    let classWeather = "";
    switch (props.weather) {
        case "Clear":
            classWeather = styles.Clear;
            break;
        case "Snow":
            classWeather = styles.Snow;
            break;
        case "Clouds":
            classWeather = styles.Clouds;
            break;
        case "Rain":
            classWeather = styles.Rain;
            break;
        default:
            classWeather = ""
    }

    const classesHeadingIcon = classNames(
        styles.HeadingIcn,
        classWeather
    );

    const classIconWeather = classNames(
        styles.WeatherIcon,
        classWeather
    );

    if (props.index === 0) {
        return (
            <div className={styles.Heading}>
                <span className={classesHeadingIcon}></span>
                <span className={styles.HeadingTemp}>{temp}°</span>
                <span className={styles.HeadingCity}>{props.city}</span>
            </div>
        )
    } else {
        return (
            <div className={styles.ForecastContainer}>
                <span className={styles.ForecastDay}>{day}</span>
                <span className={classIconWeather}></span>
                <span  className={styles.ForecastTemp}>{temp}°</span>
            </div>
        )
    }
};

Day.propTypes = {
    city: PropTypes.string,
    index: PropTypes.number,
    temp: PropTypes.number,
    weather: PropTypes.string
};

export default Day;
