import React from "react";

const Landing = () => {
	return (
		<div>
			<h1 className="text-xl">
				This is the <span className="font-bold text-green-500">Landing</span>
			</h1>
			<a href="http://localhost:8888/auth/twitch">Login with Twitch</a>
		</div>
	);
};

export default Landing;
