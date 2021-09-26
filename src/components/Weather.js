import React from "react";
import AppLabel from "./AppLabel";
import WeatherCondition from "./WeatherCondition";
import Location from "./Location";
import WeatherResult from "./WeatherResult";

const Weather = () => {
	return (
		<div className="Weather">
			<AppLabel />
			<WeatherCondition />
			<Location />
			<WeatherResult />
		</div>
	);
};

export default Weather;
