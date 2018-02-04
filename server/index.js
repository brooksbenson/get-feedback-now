const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(new GoogleStrategy());
//informs passport to use the GoogleStrategy

const app = express();
//app represents our express server, 
//and is where we will define all route handlers.

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