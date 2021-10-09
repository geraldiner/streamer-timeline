const express = require("express");

require("dotenv").config({ path: "./config/.env" });

const app = express();

// Server is running, better catch it..
app.listen(process.env.PORT, console.log(`Server running on port http://localhost:${process.env.PORT}`));
