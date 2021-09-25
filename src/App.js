import "./App.css";
import SearchCity from "./SearchCity";
import Weather from "./Weather";
import {
	Switch,
	Route,
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Route path="/" exact>
				<SearchCity />
			</Route>
		</div>
	);
}

export default App;
