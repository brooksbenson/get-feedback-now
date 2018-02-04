# Passport

Passport is authentication middleware for Node.js. It was designed for one purpose: authenticating requests.

## OAuth

OAuth is an authorization protocol that allows a 3rd party application to access user data from a resource without
the resource exposing account credentials.

## Passport Strategies

Strategies are modules that deal with OAuth for particular resources, such as Google or Facebook.

### Passport Google OAuth 20

This is a passport strategy specific to authenticating through Google.

#### Google+ API

The Google+ API is required for authenticating through Google. To get started,
head over to console.developer.google.com. Once there, create a project, then enable
the Google+ API. Once that is complete, make sure to hit the credentials option under
APIs & Services, hit create credentials, then select OAuth client ID.