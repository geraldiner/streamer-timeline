import React, { useState } from "react";

const NavBar = () => {
	const user = true;

	return (
		<nav className="navbar w-100 bg-gray-800 px-32 py-4 flex justify-between text-white">
			<div className="logo">
				<h3 className="font-bold">StreamerTimeline</h3>
			</div>
			<div className="main-nav">
				{user ? (
					<a className="nav-btn" href="http://localhost:8888/auth/logout">
						Logout
					</a>
				) : (
					<a className="nav-btn" href="http://localhost:8888/auth/twitch">
						Login with Twitch
					</a>
				)}
			</div>
		</nav>
	);
};

export default NavBar;
