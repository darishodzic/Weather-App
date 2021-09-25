import "./App.css";
import City from "./components/City";
import WeatherInfo from "./components/WeatherInfo";
import AppLabel from "./components/AppLabel";
function App() {
	return (
		<div className="App">
			<AppLabel />
			<City />
			<WeatherInfo />
		</div>
	);
}

export default App;
