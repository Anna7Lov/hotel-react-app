import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from 'react-animated-weather';

import './Weather.scss';

export default function Weather({ city }) {
  let [temperature, setTemperature] = useState(null);
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);

  if (temperature) {
    return (
      <div className="Weather">
        {temperature > 24
          ? <ReactAnimatedWeather
            icon='CLEAR_DAY'
            color='#1B75BB'
          /> : <ReactAnimatedWeather
            icon='PARTLY_CLOUDY_DAY'
            color='#1B75BB'
          />}
        <div>
          <h4 className="Weather__title">{city}</h4>
          <p className="Weather__temperature">
            {Math.round(temperature)}°C
          </p>
        </div>
      </div>
    );
  }
}