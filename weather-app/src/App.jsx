import {useEffect, useRef, useState} from 'react'
import './App.css'

import SearchSection from "./componets/SearchSection.jsx";
import CurrentWeather from "./componets/CurrentWeather.jsx";
import HourlyWeatherItem from "./componets/HourlyWeatherItem.jsx";
import {weatherCodes} from "./constants.js";
import NoResultsDiv from "./componets/NoResultsDiv.jsx";
function App() {
    const API_KEY= "531a5038f19a4454bb762726240710";
    const [currentWeather, setCurrentWeather] = useState({});
    const [hourlyForecasts, setHourlyForecasts] = useState([]);
    const [hasNoResult,setHasNoResult] = useState(false);
    const searchInputRef = useRef(null);

    const filterHourlyForecast = (hourlyData) => {
        const currentHour = new Date().setMinutes(0, 0, 0);
        const next24Hours = currentHour + 24 * 60 * 60 * 1000;
        // Filter the hourly data to only include the next 24 hours
        const next24HoursData = hourlyData.filter(({ time }) => {
            const forecastTime = new Date(time).getTime();
            return forecastTime >= currentHour && forecastTime <= next24Hours;
        });
        setHourlyForecasts(next24HoursData);
    }
    const getWeatherDetails = async (API_URL) => {
        setHasNoResult(false);
        try{
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error();
            const data = await response.json();

            const temperature = Math.floor(data.current.temp_c);
            const description = data.current.condition.text;
            const weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(data.current.condition.code));
            setCurrentWeather({temperature, description,weatherIcon});

            // Combine hourly data from both forecast days
            const combinedHourlyData = [...data.forecast.forecastday[0].hour, ...data.forecast.forecastday[1].hour];
            searchInputRef.current.value = data.location.name
            filterHourlyForecast(combinedHourlyData);

        }catch(error){
            setHasNoResult(true);
        }
    }
    useEffect(() => {
        const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=london&days=2`;
        getWeatherDetails(API_URL);
    },[])
    return (
        <div className="container">
            <SearchSection getWeatherDetails={getWeatherDetails} searchInputRef={searchInputRef}/>
            {
                hasNoResult? (
                    <NoResultsDiv/>
                ): (
                    <div className="weather-section">
                        <CurrentWeather currentWeather={currentWeather}/>
                        <div className="hourly-forecast">
                            <ul className="weather-list">
                                {hourlyForecasts.map(hourlyWeather => (
                                    <HourlyWeatherItem key={hourlyWeather.time_epoch} hourlyWeather={hourlyWeather}/>
                                ))}

                            </ul>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default App
