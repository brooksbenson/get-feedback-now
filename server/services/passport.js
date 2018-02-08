const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: 'http://localhost:3000/auth/google/callback' //route handler for when Google redirects user back to our app
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({ googleID: profile.id })
        .then(existingUser => {
          if (existingUser) {
            done(null, existingUser); //is passed to serializeUser
          } else {
            const user = new User({ googleID: profile.id });
            user.save()
              .then(user => done(null, user)) //is passed to serializeUser
              .catch((err) => console.log('failed to save new user'));
          }
        })
    }
  )
);