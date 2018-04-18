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
require('./routes/authRoutes')(app);
const chat = require("./chat/chat.js");
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
