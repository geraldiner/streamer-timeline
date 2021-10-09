import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";

const App = () => {
	return (
		<Router>
			<NavBar />
			<div className="w-4/5 mx-auto mt-16">
				<Switch>
					<Route path="/" exact component={Landing} />
					<Route path="/dashboard" component={Dashboard} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
