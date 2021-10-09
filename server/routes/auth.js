const express = require("express");
const router = express.Router();
const passport = require("passport");
const auth = require("../middleware/auth");

// @desc  Auth with Twitch
// @route GET /auth/twitch
router.get("/twitch", passport.authenticate("twitch"));

// @desc  Twitch auth callback
// @route GET /auth/twitch/callback
router.get(
	"/twitch/callback",
	passport.authenticate("twitch", {
		failureRedirect: "/",
	}),
	(req, res) => {
		console.log("logging in");
		res.redirect("/dashboard");
	},
);

// @desc  Logout user
// @route GET /auth/logout
router.get("/logout", (req, res) => {
	console.log("logging out");
	req.session.destroy(err => {
		if (err) console.log("Error", err);
		req.sessionID = null;
		req.user = null;
		res.redirect("http://localhost:3000");
	});
	req.logout();
});

module.exports = router;
