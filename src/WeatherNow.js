import React from "react";
import WeatherDetails from "./WeatherDetails";
import "./WeatherNow.css";
import axios from "axios";

export default function WeatherNow() {
  return (
    <div className="WeatherNow">
      <h1>Graz</h1>
      <p id="today">
        <span id="day">SUNDAY</span>, <span id="time">14:00</span>
      </p>
      <div className="row" id="now">
        <div className="col-1"></div>
        <div className="col-4">
          <img src="" alt="" id="weather-icon" className="center-block" />
        </div>
        <div className="col-4">
          <p className="text-center" id="temperature-field">
            <span id="temperature">34</span>
          </p>
        </div>
        <div className="col-2">
          <p className="text-center" id="units">
            <span>
              <a href="#" id="celsius-link" className="active">
                °C&nbsp;
              </a>
            </span>
             |&nbsp; 
            <span>
              <a href="#" id="fahrenheit-link">
                °F
              </a>
            </span>
          </p>
        </div>
        <div className="col-1"></div>
      </div>
      <WeatherDetails />
    </div>
  );
}
