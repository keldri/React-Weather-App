import PropTypes from 'prop-types';
import "./currentWeather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
        <div className="top">
        <div>
        <p className="city">{data.city}</p>
        <p className="weather-description">{ }</p>
        </div>
        </div>
        <img
            src={`icons/${data.weather[0].icon}.png`}
            alt="weather"
            className="weather-icon"
        />
        <div className="bottom">
            <p className="temperature">{Math.round(data.main.temp)}°C</p>
            <div className="details">
                <div className="parameter-row">
                    <span className="parameter-label">Feels Like</span>
                    <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Wind</span>
                    <span className="parameter-value">{data.wind.speed}</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Humidity</span>
                    <span className="parameter-value">{data.main.humidity}</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Pressure</span>
                    <span className="parameter-value">{data.main.pressure}</span>
                </div>
            </div>
            
        </div>
    </div>
  );
};

CurrentWeather.propTypes = {
    /** */
    data: PropTypes.object,
}
export default CurrentWeather;
