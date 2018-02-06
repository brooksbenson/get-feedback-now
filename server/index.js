const express = require('express');
require('./services/passport');

const app = express();

const PORT = process.env.PORT || 3000;
//if our application is running in the Heroku environment,
//then process.env.PORT will be defined, telling our Node.js
//application which port to listen to for incoming HTTP requests

app.listen(PORT); 
//app.listen tells node.js to listen for incoming requests on a specific port