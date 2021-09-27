import React from "react";
import "../App.css";

const WeatherProp = ({
	data,
	WeatherData,
}) => {
	return (
		<div>
			<img
				src={data.icon_link}
				alt=""
			/>
			<span>
				<h1>{WeatherData}</h1>
				<h2>{data.name}</h2>
			</span>
		</div>
	);
};

export default WeatherProp;
