const passport = require('passport');

module.exports = app => {

  app.get('/auth/google', passport.authenticate('google', { 
    scope: ['email', 'profile'] //tells Google what resources our app needs
  }));

  app.get('/auth/google/callback', passport.authenticate('google'));

};

