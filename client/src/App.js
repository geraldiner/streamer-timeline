import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";

const App = () => {
	return (
		<Router>
			<div className="w-4/5 mx-auto mt-16">
				<h1 className="text-xl text-blue font-bold">Hello, world!</h1>
				<Switch>
					<Route path="/" exact component={Landing} />
					<Route path="/dashboard" component={Dashboard} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
