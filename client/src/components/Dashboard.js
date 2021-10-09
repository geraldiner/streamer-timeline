import React from "react";

const Dashboard = () => {
	return (
		<div>
			<h1 className="text-xl">
				This is the <span className="font-bold text-purple-500">Dashboard</span>
			</h1>
			<a href="http://localhost:8888/auth/logout">Logout</a>
		</div>
	);
};

export default Dashboard;
