import React from "react";
import "../App.css";

const WeatherCondition = () => {
	return (
		<div className="WeatherCondition">
			<span>
				<span>30 C</span> | Cloudy
			</span>
			<img
				src="/icons/perfect-day.svg"
				alt=""
			/>
		</div>
	);
};

export default WeatherCondition;
