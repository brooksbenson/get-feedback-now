# Passport

Passport is authentication middleware for Node.js. It was designed for one purpose: authenticating requests.

## OAuth

OAuth is an authorization protocol that allows a 3rd party application to access user data from a resource without the resource exposing the users account credentials.

## Passport Strategies

Strategies are modules that deal with OAuth for particular resources, such as Google or Facebook.

### Passport Google OAuth 20

This is a passport strategy specific to authenticating through Google.

To refer to a registered strategy within a route, use passport.authentical(*strategy name*)