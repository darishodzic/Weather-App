import React from "react";
import ImgMain from "./ImgMain";
import WeatherInfo from "./WeatherInfo";
import "../App.css";
import SearchBox from "./SearchBox";

const SearchCity = ({
	setInputvalue,
	fetchWeather,
}) => {
	return (
		<div className="SearchCity">
			<ImgMain />
			<WeatherInfo />
			<SearchBox
				fetchWeather={fetchWeather}
				setInputvalue={setInputvalue}
			/>
		</div>
	);
};

export default SearchCity;
