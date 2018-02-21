# Deployment

How to deploy

## Pre-deployment Checklist

1. Dynamic Port Binding

If our application is running in the Heroku environemt, then the
process.env.PORT environemt variable will be defined by Heroku. Make sure
the application is listening for HTTP requests on the port when in production

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

## Client management

1. run the build script in the client
2. make sure express serves up index.html when necessary. (see server notes).