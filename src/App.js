import "./App.css";
import SearchCity from "./components/SearchCity";
import Weather from "./components/Weather";
import { useState } from "react";

import {
	Switch,
	Route,
} from "react-router-dom";

function App() {
	const [inputValue, setInputvalue] =
		useState("");

	return (
		<div className="App">
			<Switch>
				<Route path="/" exact>
					<SearchCity
						inputValue={inputValue}
						setInputvalue={
							setInputvalue
						}
					/>
				</Route>
				<Route path="/W" exact>
					<Weather />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
