import React from "react";
import ImgMain from "./components/ImgMain";
import WeatherInfo from "./components/WeatherInfo";
import AppLabel from "./components/AppLabel";
import "./App.css";
import SearchBox from "./SearchBox";

const SearchCity = () => {
	return (
		<div className="SearchCity">
			<AppLabel />
			<ImgMain />
			<WeatherInfo />
			<SearchBox />
		</div>
	);
};

export default SearchCity;
