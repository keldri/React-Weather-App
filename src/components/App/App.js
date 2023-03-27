import { useState } from "react";
import "./App.css"

import { WEATHER_API_KEY, WEATHER_API_URL } from '../../api'

import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Forecast from '../Forecast/Forecast';
import Search from "../Search/Search";

function App() {
    // Use the useState hook to declare state variables for currentWeather and forecast and set to null on initial load.
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");
        
        // Declare variables for the requests to OpenWeatherMap.org endpoints using constants for the API URL and API key whichlive in '../src/api'
        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        
        // The fetch method returns a promise that will resolve to our response object. The promise method `.all` takes in an iterable of promises as input and returns a single promise
        Promise.all([currentWeatherFetch,forecastFetch])
        .then(async (response) => {
            const weatherResponse =  await response[0].json();
            const forecastResponse =  await response[1].json(); 

            // The state for `currentWeather` and `forecast` are set to their respective response objects using spread + the `city:searchData.label`
            setCurrentWeather({ city:searchData.label, ...weatherResponse});
            setForecast({ city:searchData.label, ...forecastResponse});
        })
        // If the promise returns an error, we're catching it and logging to the console. 
        .catch((err) => console.log(err));

    };


    return (
        <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather}/>}
        {forecast && <Forecast data={forecast} />}
        </div>
    );
}

export default App;

