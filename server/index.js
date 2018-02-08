const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./models/user-model');
require('./services/passport');
mongoose.connect(keys.mongoURI);

const app = express();

app.use(cookieSession({
  name: 'session',
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth-routes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT); 