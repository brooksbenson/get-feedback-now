const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
//app represents our express server, 
//and is where we will define all route handlers.


const keys = require('./config/keys');
//informs passport to use GoogleStrategy
//GoogleStrategy takes an object and a callback
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: 'http://localhost:3000/auth/google/callback' //route handler for when Google redirects user back to our app
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
    }
  )
);
//Route handler for authenticating through Google
//passport authenticate kicks off an OAuth authentication process
//passport internally identifies our GoogleStrategy instance as the string 'google'
app.get('/auth/google', passport.authenticate('google', { 
  scope: ['email', 'profile'] //tells Google what resources our app needs
}));

app.get('/auth/google/callback', passport.authenticate('google'));

//A route handler overview
  //each route handles particular HTTP requests
  //each route is provided a path to match a request against
  //if the request type and path match the request, a callback is executed
  //the callback is passed a few arguments:
    //req: is an object that represents the incoming request
    //res: is an object representing our applications response to the request

const PORT = process.env.PORT || 3000;
//if our application is running in the Heroku environment,
//then process.env.PORT will be defined, telling our Node.js
//application which port to listen to for incoming HTTP requests

app.listen(PORT); 
//app.listen tells node.js to listen for incoming requests on a specific port