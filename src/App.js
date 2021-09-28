import "./App.css";
import SearchCity from "./components/SearchCity";
import Weather from "./components/Weather";
import { useState } from "react";
import axios from "axios";

import AppLabel from "./components/AppLabel";

function App() {
	const API_KEY =
		"f7d02980e1663cdc0ddba0bb1bac2ecc";
	const [inputValue, setInputvalue] =
		useState("");
	const [
		WeatherData,
		updateWeatherData,
	] = useState();

	const fetchWeather = async (e) => {
		e.preventDefault();

		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}`
		);
		updateWeatherData(response.data);
		console.log(response.data);
	};
	return (
		<div className="App">
			<AppLabel />
			{WeatherData ? (
				<Weather
					WeatherData={WeatherData}
					updateWeatherData={
						updateWeatherData
					}
				/>
			) : (
				<SearchCity
					fetchWeather={fetchWeather}
					setInputvalue={setInputvalue}
				/>
			)}
		</div>
	);
}

export default App;
