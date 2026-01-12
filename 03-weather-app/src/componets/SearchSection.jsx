import React from 'react';

function SearchSection({getWeatherDetails,searchInputRef}) {
    const API_KEY= "531a5038f19a4454bb762726240710";

    function handleCitySearch(e){
        e.preventDefault();
        const searchInput = e.target.querySelector('.search-input');
        const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`;
        getWeatherDetails(API_URL);
    }
    const handleLocationSearch = () =>{
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                const { latitude, longitude } = position.coords;
                const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=2`;
                getWeatherDetails(API_URL);
            },
            ()=>{
                alert("Location access denied")
            }
        )
    }
    return (
        <div className="search-section">
            <form action="#" className="search-form" onSubmit={handleCitySearch}>
                <span className="material-symbols-rounded">search</span>
                <input type="search" placeholder="Enter a city name" ref={searchInputRef} className="search-input" required/>
            </form>
            <button className="location-button" onClick={handleLocationSearch}>
                <span className="material-symbols-rounded">my_location</span>
            </button>
        </div>
    );
}

export default SearchSection;