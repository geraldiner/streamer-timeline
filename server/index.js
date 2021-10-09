const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const connectDB = require("./config/db");

require("dotenv").config({ path: "./config/.env" });
require("./config/passport")(passport);

connectDB();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(
	session({
		secret: "secretsecret",
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({
			mongoUrl: process.env.MONGODB_URI,
			mongooseConnection: mongoose.connection,
		}),
		cookie: {
			sameSite: "none",
			secure: true,
			maxAge: 1000 * 60 * 60 * 24, // One day
		},
	}),
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./routes/user"));
app.use("/auth", require("./routes/auth"));
// app.use("/api", require("./routes/api"));

// Server is running, better catch it..
app.listen(process.env.PORT, console.log(`Server running on port http://localhost:${process.env.PORT}`));
