import React from "react";
import "./App.css";
import Search from "./Search";
import WeatherNow from "./WeatherNow";
import Forecast from "./Forecast";
import ForecastTitles from "./ForecastTitles";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search />
            <WeatherNow />
            <ForecastTitles />
            <Forecast />
            <Forecast />
            <Forecast />
            <Forecast />
            <Forecast />
          </div>
        </div>
      </div>
    </div>
  );
}