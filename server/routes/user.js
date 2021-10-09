const express = require("express");
const router = express.Router();
const passport = require("passport");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// @desc  Get user info
// @route GET /user

router.get("/user", ensureAuth, async (req, res) => {
	console.log("getting user data");
	const user = await User.findById(req.user.id);
	res.send(user);
});

module.exports = router;
