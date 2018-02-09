# Devlopment vs. Production

It's absolutely necessary for our application to distinguish between development and production environments.

All implemented 3rd party services should be configured for both development and production environment.

## Configuration Keys

Inside the config file, keys.js is responsible for distinguishing the current environment.
It does this be looking at the process.env.NODE_ENV property, and checks to see if it is equal to 'production'. If so, it returns the keys defined by prod.js, otherwise it returns the keys defined in the dev.js.

### Development Keys

The development keys should continue to be housed in the projects local directory and should be ignored by git.

### Production Keys

Production keys should be stored in what are called environment variables.
These environment variables are stored on Heroku, then referenced by prod.js.
prod.js should be included in Git because the environment variables it references are stored safely on Heroku.