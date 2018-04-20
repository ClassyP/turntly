const express = require("express");
const path = require("path");
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const MongoClient = require("mongodb").MongoClient;
const f = require("util").format;
const assert = require("assert");
const keys = require('./config/keys.js');
const app = express();
console.log('before');
require('./routes/authRoutes')(app);
console.log('after');
const chat = require("./chat/chat.js");

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: '471708934936-8f7vh46cj86m7av1kmdbc2gukbea9kf0.apps.googleusercontent.com',
    clientSecret: 'W0RVPQOxzWjaIFZxzk2HLL0V',
    callbackURL: "http://localhost:3000/login/facebook/return"
  },
  function(accessToken, refreshToken, profile, cb) {
    // In this example, the user's Facebook profile is supplied as the user
    // record.  In a production-quality application, the Facebook profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    console.log('profile', profile);
  return cb(null, profile);
}));


  /*function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));*/

chat();
console.log("starting up");
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "build")));

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`Server now on port ${PORT}!`);
});
