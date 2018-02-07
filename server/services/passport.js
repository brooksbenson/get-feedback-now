const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: 'http://localhost:3000/auth/google/callback' //route handler for when Google redirects user back to our app
    },
    (accessToken, refreshToken, profile, done) => {
      new UserClass({ googleID: profile.id }).save();
    }
  )
);