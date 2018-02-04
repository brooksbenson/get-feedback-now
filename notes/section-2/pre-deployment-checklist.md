# Deployment Checklist

1. Dynamic Port Binding

If our application is running in the Heroku environemt, then the
process.env.PORT environemt variable will be defined by Heroku. Make sure
the application is listening for HTTP requests on the port when in production

2. Define the node environment

Heroku needs to know the node environment, or node version, to run our application in.
Define the engines property in package.json, then define the node property and assign
it the version of node the application was developed with. Do the same for npm.

3. Specify start script

The start script tells Heroku what command to run to start our server.

4. Make sure .gitignore is ignoring node_modules

Heroku will install our modules for us.