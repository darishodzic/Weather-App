import React from "react";
import WeatherCondition from "./WeatherCondition";
import Location from "./Location";
import WeatherResult from "./WeatherResult";

const Weather = ({ WeatherData }) => {
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
		</div>
	);
};

export default Weather;
