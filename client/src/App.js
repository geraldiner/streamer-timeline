import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";

const App = () => {
	return (
		<Router>
			<h1 className="text-xl text-blue font-bold">Hello, world!</h1>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/dashboard" component={Dashboard} />
			</Switch>
		</Router>
	);
};

export default App;
