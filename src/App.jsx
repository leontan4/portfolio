import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import OnePage from "./pages/OnePage";
import Error from "./pages/Error";

function App() {
	return (
		<Router>
			<AnimatePresence>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<OnePage />
					</Route>
					<Route path="*">
						<Error />
					</Route>
				</Switch>
			</AnimatePresence>
		</Router>
	);
}

export default App;
