# Google OAuth

If a user permits our application to access their data, Google is going allow us to access their user ID. This user ID is how we will uniquely idenfify a user within our system.

## On Google's console.developers platform

1. Create project @ console.developer.google.com
2. Enable Google+ API
3. Credential -> OAuth Consent Screen -> Enter product name
4. Credentials -> Credentials -> Enter authorized JS origins & authorized redirect URLs
5. Generate credentials
6. Register the callback route for Google to use when a user has permitted access

## Inside the application
1. Create config/keys.js and store the Google client id and secret
2. Add config directory to .gitignore
3. Instantiate GoogleStrategy within passport.use
4. Pass clientID, clientSecret, and callbackURL as the first argument to GoogleStrategy
5. Define a callback function as the second argument to GoogleStrategy
6. To refer to the GoogleStrategy within route handlers, use passport.authenticate

### First-time

If user hasn't logged in before, we'll create a record in our users collection.