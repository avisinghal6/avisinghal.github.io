import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import Homepage from "./components/homepage";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Publications from "./components/publications";
import OpenSource from "./components/opensource";

import { TRACKING_ID } from "./data/tracking";
import './App.css';

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);
  return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/education" element={<Education />} />
				<Route exact path="/experience" element={<Experience />} />
				<Route exact path="/projects" element={<Projects />} />
				<Route exact path="/contact" element={<Contact />} />
				<Route exact path="/publications" element={<Publications />} />
				<Route exact path="/opensource" element={<OpenSource />} />
			</Routes>
		</div>
	);
}

export default App;
