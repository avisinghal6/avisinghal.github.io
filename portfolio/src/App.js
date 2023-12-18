import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import ReactGA from "react-ga4";
import Homepage from "./components/homepage";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Publications from "./components/publications";
import OpenSource from "./components/opensource";
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

import { TRACKING_ID } from "./data/tracking";
import './App.css';

function App() {
	const location = useLocation();
	useEffect(() => {
		ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
		// ReactGA.pageview(location.pathname + location.search);
	  }, [location.pathname,location.search]);
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
