import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/ScrollIndicator";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { projects, languagesUse, hobbies, experiences, contacts } from "./data";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<Header />
					<ScrollIndicator />
					<main>
						<About languagesUse={languagesUse} hobbies={hobbies} />
						<Experience experiences={experiences} />
						<Projects projects={projects} />
						<Contact contacts={contacts} />
						<Footer />
					</main>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
