import React from "react";
import "../App.css";

const Location = ({ WeatherData }) => {
	return (
		<div className="Location">
			{WeatherData.name},{" "}
			{WeatherData.sys.country}
		</div>
	);
};

export default Location;
