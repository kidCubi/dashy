import React, { Component } from 'react';
import { OPEN_WEATHER_API_KEY } from "../../const";
import Day from './Day';
import styles from './Meteo.module.scss';

import { connect } from 'react-redux';

import { setMeteoLoaded } from '../../redux/actions/index'

const mapState = state => ({
    app: state.app,
});

const mapActions = dispatch => ({
    setMeteoLoaded: (loaded) => dispatch(setMeteoLoaded(loaded))
});

class Meteo extends Component {
    constructor() {
        super();
        this.forecastData = [];
        this.indents = [];
    }

    componentDidMount() {
        fetch(`https://api.openweathermap.org/data/2.5/forecast/?id=2657896&units=metrics&APPID=${OPEN_WEATHER_API_KEY}`)
            .then((response) => {
                return response.text()
            })
            .then((data) => {
                const weatherData = JSON.parse(data);
                this.cityName = weatherData.city.name;
                this.forecastData.push(weatherData.list[0], weatherData.list[8], weatherData.list[16], weatherData.list[24], weatherData.list[32]);
                for (let i = 0; i < 5; i++) {
                    this.indents.push(<Day
                        city={this.cityName}
                        temp={this.forecastData[i].main.temp}
                        day={this.forecastData[i].dt}
                        weather={this.forecastData[i].weather[0].main}
                        index={i}
                        key={i}
                    />);
                }
                this.props.setMeteoLoaded(true);
            });
    }

    render() {
        return (
            <div className={styles.Wrapper}>
                {this.props.app.meteoLoaded &&
                    <div>{this.indents}</div>
                }
                {this.props.children}
            </div>
        );
    }
}

export default connect(mapState, mapActions)(Meteo);

