# Passport

Passport is authentication middleware for Node.js. It was designed for one purpose: authenticating requests.

## OAuth

OAuth is an authorization protocol that allows a 3rd party application to access user data from a resource without the resource exposing the users account credentials.

## Passport Strategies

Strategies are modules that deal with OAuth for particular resources, such as Google or Facebook.

### Passport Google OAuth 20

This is a passport strategy specific to authenticating through Google.

#### Google OAuth

1. Create project @ console.developer.google.com
2. Enable Google+ API
3. Credential -> OAuth Consent Screen -> Enter product name
4. Credentials -> Credentials -> Enter authorized JS origins & authorized redirect URLs
5. Generate credentials
6. Create config/keys.js and store client id and client secret
7. Add config directory to .gitignore
8. Use the google clientID and clientSecret inside of GoogleStrategy instantiation object
10. Define the callbackURL inside of the GoogleStrategy instantaition object
11. Make sure to register the callback URL with Google
12. Define a callback function as the second argument passed to the GoogleStrategy constructor and define its arguments
13. Create a route handler for initial auth with Google. Use passport.authenticate as the callback, pass 'google' as the first argument to refer to our GoogleStrategy, then an object with the scope property defined as an array of that itself defines the resources our app would like from Google.