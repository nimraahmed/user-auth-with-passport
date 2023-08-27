const express = require("express");
const path = require("path");
const passport = require("passport");

/**
 * -------------- GENERAL SETUP ----------------
 */

require("dotenv").config();
var app = express();
require("./config/database"); // Configures the database and opens a global connection that can be used in any module with `mongoose.connection`
require("./models/user"); //load models
require("./config/passport")(passport); // Pass the global passport object into the configuration function

app.use(passport.initialize()); // initialize the passport object on every request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * -------------- ROUTES ----------------
 */

// Imports all of the routes from ./routes/index.js
app.use(require("./routes"));

/**
 * -------------- SERVER ----------------
 */

app.listen(3000);
