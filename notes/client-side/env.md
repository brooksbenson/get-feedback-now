# Environment Variables

It is possible to set environment variables in the client part of an application. This is done by the create-react-app server.

The variables are defined on the process.env namespace.

## .env files

.env files define environment variables. They must be defined in the root of a project. Every variable name must be prefixed with *REACT_APP_<NAME>*, and should append a equals sign followed by the value to use. *=val*.

### .env.development

This is the file that will be used if the client is running in development.

### .env.production

This is the file that will be used if the client is running in production.