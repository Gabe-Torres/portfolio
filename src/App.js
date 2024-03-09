import { useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	const location = useLocation();
  const transitions = useTransition(location, {
		from: { opacity: 0, transform: 'translate3d(-20%,0,0)' },
		enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
		leave: { opacity: 0, transform: 'translate3d(20%,0,0)' },
		config: { duration: 500 },
  });

	return  transitions((style, item) => (
		<animated.div style={style}>
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/about" element={<About />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/articles" element={<Articles />} />
			<Route path="/article/:slug" element={<ReadArticle />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="*" element={<Notfound />} />
		</Routes>
		</animated.div>
	));
}

export default App;
