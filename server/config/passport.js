const TwitchTvStrategy = require("passport-twitchtv");
const User = require("../models/User")

module.exports = passport => {
	passport.use(
		new TwitchtvStrategy(
			{
				clientID: process.env.TWITCH_CLIENT_ID,
				clientSecret: process.env.TWITCH_CLIENT_SECRET,
				callbackURL: "/auth/twitch/callback",
				scope: "user_read",
			},
			async (accessToken, refreshToken, profile, done) => {
				console.log(profile);
        const newUser = {
          twitchId = profile.id
        }
        
				User.findOrCreate({ twitchtvId: profile.id }, function (err, user) {
					return done(err, user);
				});
			},
		),
	);
};
