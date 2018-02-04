const express = require('express');

const app = express();
//app represents our express server, 
//and is where we will define all route handlers.

//A route handler for get requests
  //req is an object that represents the incoming request
  //res is an object representing our applications response to the request
app.get('/', (req, res) => { 
  res.send({hi: 'hello'});
});

const PORT = process.env.port || 3000;
//if our application is running in the Heroku environment,
//then process.env.PORT will be defined, telling our Node.js
//application which port to listen to for incoming HTTP requests

app.listen(PORT); 
//app.listen tells node.js to listen for incoming requests on a specific port