import React from "react";
import ImgMain from "./ImgMain";
import WeatherInfo from "./WeatherInfo";
import AppLabel from "./AppLabel";
import "../App.css";
import SearchBox from "./SearchBox";

const SearchCity = ({
	inputValue,
	setInputvalue,
}) => {
	return (
		<div className="SearchCity">
			<AppLabel />
			<ImgMain />
			<WeatherInfo />
			<SearchBox
				inputValue={inputValue}
				setInputvalue={setInputvalue}
			/>
		</div>
	);
};

export default SearchCity;
