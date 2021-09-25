import React from "react";
import { Link } from "react-router-dom";
const SearchBox = ({
	inputValue,
	setInputvalue,
}) => {
	const inputHandler = (e) => {
		setInputvalue(e.target.value);
		console.log(inputValue);
	};

	const searchHandler = (e) => {
		e.preventDefault();
		// console.log(inputValue);
		setInputvalue("");
	};

	return (
		<form className="SearchBox">
			<input
				onChange={inputHandler}
				type="text"
				placeholder="City"
			/>
			<button
				onClick={searchHandler}
				type="submit"
			>
				<Link to={inputValue}>
					Search
				</Link>
			</button>
		</form>
	);
};

export default SearchBox;
