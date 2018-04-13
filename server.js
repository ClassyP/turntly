<<<<<<< HEAD
const express = require("express");
const path = require("path");
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
//This is our environmental variable requirement
//const dotenv = require("dotenv");
//const MongoClient = require("mongodb").MongoClient;
const f = require("util").format;
//Assert is used to write unit tests
//const assert = require("assert");
const PORT = process.env.PORT || 3001;
const keys = require('./config/keys.js');

=======
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
>>>>>>> 05dacea2961f420418737c57897ccfdceaf347a4
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

<<<<<<< HEAD
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 *60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//This is our server listener
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
=======
app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
>>>>>>> 05dacea2961f420418737c57897ccfdceaf347a4
