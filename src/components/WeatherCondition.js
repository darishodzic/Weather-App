import React from "react";
import "../App.css";

const WeatherCondition = ({
	WeatherData,
}) => {
	return (
		<div className="WeatherCondition">
			<span>
				<span>
					{Math.round(
						(WeatherData.main.temp -
							273.15) *
							10
					) / 10}{" "}
					C
				</span>{" "}
				|{" "}
				{
					WeatherData.weather[0]
						.description
				}
			</span>
			<img
				src={`https://openweathermap.org/img/w/${WeatherData.weather[0].icon}.png`}
				alt=""
			/>
		</div>
	);
};

export default WeatherCondition;
