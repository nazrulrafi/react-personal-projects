import React from 'react';

import {weatherCodes} from "../constants.js";

function HourlyWeatherItem({hourlyWeather}) {
    const temparature =  Math.floor(hourlyWeather.temp_c)
    const time = hourlyWeather.time.split(" ")[1].substring(0,5);
    const weatherIcon = Object.keys(weatherCodes).find((icon) => weatherCodes[icon].includes(hourlyWeather.condition.code));
    return (
        <li className="weather-item">
            <p className="time">{time}</p>
            <img src={`${import.meta.env.BASE_URL}${weatherIcon}.svg`} className="weather-icon"/>
            <p className="temparature">{temparature}°</p>
        </li>
    );
}

export default HourlyWeatherItem;