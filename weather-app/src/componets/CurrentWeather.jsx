import React from 'react';

function CurrentWeather({ currentWeather }) {
    return (
        <div className="current-weather">
            <img
                src={`${import.meta.env.BASE_URL}${currentWeather.weatherIcon}.svg`}
                className="weather-icon"
                alt={currentWeather.description}
            />
            <h2 className="temparature">
                {currentWeather.temperature} <span>°C</span>
            </h2>
            <p className="description">{currentWeather.description}</p>
        </div>
    );
}

export default CurrentWeather;
