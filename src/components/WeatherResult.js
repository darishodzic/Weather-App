import React from "react";
import "../App.css";
import WeatherProp from "./WeatherProp";
const data = [
	{
		name: "Feels like",
		icon_link: "/icons/temp.svg",
	},
	{
		name: "Humidity",
		icon_link: "/icons/humidity.svg",
	},
	{
		name: "Wind",
		icon_link: "/icons/wind.svg",
	},
	{
		name: "Pressure",
		icon_link: "/icons/pressure.svg",
	},
];

const WeatherResult = ({
	WeatherData,
}) => {
	return (
		<div className="Weather-Props">
			<WeatherProp
				data={data[0]}
				WeatherData={
					Math.round(
						(WeatherData.main
							.feels_like -
							273.15) *
							10
					) / 10
				}
			/>
			<WeatherProp
				data={data[1]}
				WeatherData={
					WeatherData.main.humidity
				}
			/>
			<WeatherProp
				data={data[2]}
				WeatherData={
					WeatherData.wind.speed
				}
			/>
			<WeatherProp
				data={data[3]}
				WeatherData={
					WeatherData.main.pressure
				}
			/>
		</div>
	);
};

export default WeatherResult;
