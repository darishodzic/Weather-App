import React from "react";
const SearchBox = ({
	setInputvalue,
	fetchWeather,
}) => {
	const inputHandler = (e) => {
		setInputvalue(e.target.value);
	};

	return (
		<form
			className="SearchBox"
			onSubmit={fetchWeather}
		>
			<input
				onChange={inputHandler}
				type="text"
				placeholder="City"
			/>
			<button type="submit">
				Search
			</button>
		</form>
	);
};

export default SearchBox;
