//Here we are bringing in our requirements for making Passport function properly
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

//Here we tell passport to use the Google Authentication Strategy which uses the Google+ API to authenticate users 
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.keys.GOOGLE_ID,
            clientSecret: process.env.keys.GOOGLE_SECRET,
            callbackURL: 'auth/google/callback/'
        },
        (accessToken, refreshToken, profile, done) => {
            console.log('access token', accessToken);
            console.log('refresh token', refreshToken);
            console.log('profile', profile);
        }
    )
);