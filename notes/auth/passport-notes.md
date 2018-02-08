# Passport

Passport is authentication middleware for Node.js. It was designed for one purpose: authenticating requests.

## passport.initialize() & passport.session()

Invoke each of these functions within app.use to use passport.

## serializeUser

The serialize user function is used to define a unique piece of information to identify a
user with. It gets this unique piece of information from the result of a done function
being called within passport strategy. This identifying piece of information is later used
within deserialize user.

To define the identifying piece of information, pass it to the done function that is passed
to the anonymous function that we define as the argument to serializeUser.

## deserializeUser

The deserialize user function is called when a user makes a follow up request to our
application and has been identified by passport as being serialized. Passport passes
the identifying piece of information we defined with serialize user to an anonymous
function that we define as the argument to deserialize user, allowing us to fetch user
data from the database, and then pass it to the done function that passport passes to
our anonymous function, allowing us to access it later within our routes.

## cookies

Passport will pull the identifying piece of information we defined in serializeUser from
a cookie. It does this by looking at req.session, a property defined by the cookie-session
middleware. req.session.passport will contain the identifying piece of data we defined with
serialize user.

## req.logout

req.logout is a function that kills a users a cookie. When a user opts to logout, call this
function to kill their cookie.

## OAuth

OAuth is an authorization protocol that allows a 3rd party application to access user data from a resource without the resource exposing the users account credentials.

## Passport Strategies

Strategies are modules that deal with OAuth for particular resources, such as Google or Facebook.

### Passport Google OAuth 20

This is a passport strategy specific to authenticating through Google.

To refer to a registered strategy within a route, use passport.authentical(*strategy name*)