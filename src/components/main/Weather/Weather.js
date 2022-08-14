import React, { useEffect, useState } from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import { ThreeDots } from 'react-loader-spinner';
import { Services } from "../../../services/services";

import './Weather.scss';

export default function Weather({ city }) {
  let [temperature, setTemperature] = useState(null);
  let [loading, setLoading] = useState(false);

  function showTemperature(response) {
    setLoading(true);
    setTemperature(response.data.main.temp);
  }

  useEffect(() => {
    Services.getTemperature().then(showTemperature);
  }, [])

  return (
    <div className="weather">
      {temperature > 24 && loading
        ? <div className="weather__content"><ReactAnimatedWeather
          icon='CLEAR_DAY'
          color='#1B75BB'
        />
          <div>
            <h4 className="weather__title">{city}</h4>
            <p className="weather__temperature">
              {Math.round(temperature)}°C
            </p>
          </div>
        </div>
        : temperature <= 24 && loading ?
          <div className="weather__content"><ReactAnimatedWeather
            icon='PARTLY_CLOUDY_DAY'
            color='#1B75BB'
          />
            <div>
              <h4 className="weather__title">{city}</h4>
              <p className="weather__temperature">
                {Math.round(temperature)}°C
              </p>
            </div>
          </div> : <div className="weather__content weather__spinner"> <ThreeDots
            height="64"
            width="64"
            radius="9"
            color='#1B75BB'
            ariaLabel='three-dots-loading'
          /> </div>}
    </div>
  );
}
