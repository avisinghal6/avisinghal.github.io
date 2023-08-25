import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import Homepage from "./components/HomePage/homepage";

import './App.css';

function App() {
  return (
		<div className="App">
      Avi
			<Routes>
				<Route exact path="/avisinghal6.github.io/" element={<Homepage />} />
			</Routes>
		</div>
	);
}

export default App;
