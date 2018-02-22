# Deployment

How to deploy

## Pre-deployment Checklist

1. Dynamic Port Binding

If our application is running in the Heroku environemt, then the
process.env.PORT environemt variable will be defined by Heroku. Make sure
the application is listening for HTTP requests on that port when in production

2. Define the node environment

Heroku needs to know the node environment, or node version, to run our application in.
Define the engines property in package.json, then define the node property and assign
it the version of node the application was developed with. Do the same for whatever
package manager that is being used.

3. Specify start script

The start script tells Heroku what command to run to start our server.

4. Make sure .gitignore is ignoring node_modules

Heroku will install our modules for us.


## First Time Deployment Checklist

1. Create app using heroku create
2. Create a remote branch pointing url provided by heroku
3. Push master branch to remote heroku branch
4. Debug
5. Run heroku open to see new application

### Heroku Build Process

Telling Heroku to run specific processes upon certain project life cycle events, define the *heroku-prebuild* or the *heroku-postbuild* scripts.

The postbuild script defined in this project tells Heroku to set the *NPM_CONFIG_PRODUCION* env variable to false, which tells Heroku to install devDependencies when running the following commands: *yarn add --prefix server/client* (tells Heroku to install all dependencies in the client directory) && *yarn run build --prefix server/client* which tells Heroku to run the build script inside of the client directory.