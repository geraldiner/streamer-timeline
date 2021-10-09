const TwitchStrategy = require("passport-twitch-new").Strategy;
const User = require("../models/User");

module.exports = passport => {
	passport.use(
		new TwitchStrategy(
			{
				clientID: process.env.TWITCH_CLIENT_ID,
				clientSecret: process.env.TWITCH_CLIENT_SECRET,
				callbackURL: "http://localhost:8888/auth/twitch/callback",
				scope: ["user:read:email"],
			},
			async (accessToken, refreshToken, profile, done) => {
				try {
					let user = await User.findOne({ twitchId: profile.id });
					if (user) {
						done(null, user);
					} else {
						user = await User.create({
							twitchId: profile.id,
							loginName: profile.login,
							displayName: profile.display_name,
							description: profile.description,
							profileImg: profile.profile_image_url,
						});
						done(null, user);
					}
				} catch (error) {
					console.log(error);
				}
			},
		),
	);

	passport.serializeUser((user, done) => done(null, user));

	passport.deserializeUser(function (user, done) {
		done(null, user);
	});
};
