import React from "react";
import WeatherCondition from "./WeatherCondition";
import Location from "./Location";
import WeatherResult from "./WeatherResult";
import "../App.css";
const Weather = ({
	WeatherData,
	updateWeatherData,
}) => {
	return (
		<div className="Weather">
			<WeatherCondition
				WeatherData={WeatherData}
			/>
			<Location
				WeatherData={WeatherData}
			/>
			<WeatherResult
				WeatherData={WeatherData}
			/>
			<button
				className="backBtn"
				onClick={() => {
					updateWeatherData("");
				}}
			>
				BACK
			</button>
		</div>
	);
};

export default Weather;
