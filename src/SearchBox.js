import React from "react";

const SearchBox = () => {
	return (
		<form className="SearchBox">
			<input
				type="text"
				placeholder="City"
			/>
			<button>Submit</button>
		</form>
	);
};

export default SearchBox;
