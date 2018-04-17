const express = require("express");
const path = require("path");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const socket = require("socket.io");

//This is our environmental variable requirement
//const dotenv = require("dotenv");
//const MongoClient = require("mongodb").MongoClient;
const f = require("util").format;
//Assert is used to write unit tests
//const assert = require("assert");
const PORT = process.env.PORT || 3001;
const keys = require("./config/keys.js");

const app = express();
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

require("./routes/authRoutes")(app);

// setup socket.io
io = socket(server);

io.on("connection", socket => {
  console.log(socket.id);

  socket.on("SEND_MESSAGE", function(data) {
    io.emit("RECEIVE_MESSAGE", data);
  });
});

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
