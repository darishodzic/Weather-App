import React from "react";

const SearchBox = () => {
	return (
		<form className="SearchBox">
			<input
				type="text"
				placeholder="City"
			/>
			<button>Search</button>
		</form>
	);
};

export default SearchBox;
