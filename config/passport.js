//Here we are bringing in our requirements for making Passport function properly
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = MongoClient.model('User');

passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    });
  });

//Here we tell passport to use the Google Authentication Strategy which uses the Google+ API to authenticate users 
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.keys.GOOGLE_ID,
            clientSecret: process.env.keys.GOOGLE_SECRET,
            callbackURL: 'auth/google/callback/'
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id });
      
            if (existingUser) {
              return done(null, existingUser);
            }
      
            const user = await new User({ googleId: profile.id }).save();
            done(null, user);
          }
        )
      );