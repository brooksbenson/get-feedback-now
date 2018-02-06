# Passport

Passport is authentication middleware for Node.js. It was designed for one purpose: authenticating requests.

## OAuth

OAuth is an authorization protocol that allows a 3rd party application to access user data from a resource without the resource exposing the users account credentials.

## Passport Strategies

Strategies are modules that deal with OAuth for particular resources, such as Google or Facebook.

### Passport Google OAuth 20

This is a passport strategy specific to authenticating through Google.

To refer to a registered strategy within a route, use passport.authentical(*strategy name*)

#### Google OAuth

##### On Google's console.developers platform

1. Create project @ console.developer.google.com
2. Enable Google+ API
3. Credential -> OAuth Consent Screen -> Enter product name
4. Credentials -> Credentials -> Enter authorized JS origins & authorized redirect URLs
5. Generate credentials
6. Register the callback route for Google to use when a user has permitted access

##### Inside the application
1. Create config/keys.js and store the Google client id and secret
2. Add config directory to .gitignore
3. Instantiate GoogleStrategy within passport.use
4. Pass clientID, clientSecret, and callbackURL as the first argument to GoogleStrategy
5. Define a callback function as the second argument to GoogleStrategy
6. To refer to the GoogleStrategy within route handlers, use passport.authenticate 