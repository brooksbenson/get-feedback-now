# Servers

Running servers listen for HTTP requests on a port. A port can be thought of as door where HTTP requests can be routed. Node.js in specific is the program listening for requests on a particular port, and when it receives one, it will pass it on the the Express.js part of the server. Express will look at the request and decide what part of our application should handle the request; these parts of the application are called route handlers. Using Express, we can define a series of route handlers that process requests for certain resources.

## Node.js

Node is an asynchronous server framework that runs JavaScript programs, thus making it possible for JavaScript to manipulate a machines local file system and to send and process data. Because Node is asychronous, a JavaScript program can be written to run asynchronously,creating a non-blocking program architecture.

## Express.js

Express is a Node.js web application framework that provides a robust set of features for creating APIs.

### Middleware

Middleware in Express is used to modify incoming requests before they reach a route handler.

#### cookie-session

Cookie-session is some middleware for Express applications. It will attach a property
called session to req, which provides an object representing the loaded session. This
session is either a new session if no session was provided in the request, or a loaded
session if one existed on the request.

##### cookie-session api

The cookie session function takes an object as an argument, which has two required 
properties: maxAge and keys. maxAge is assigned the number of milliseconds that a cookie
should be valid for, while keys is an array that defines a series of strings to use for
encrypting our cookies. The keys should be stored in a file that is ignored by git.

#### express-session

express-session is a piece of middleware that defines a reference to a session within a
cookie. This is useful because session can be stored in a database, which can hold
arbitrary amounts of data.

### Route handlers
Route handlers are responsible for handling HTTP requests, which come in several varieties.

#### get
A request for information

#### post
Send info

#### put
Update all the properties of something

#### delete
Delete something

#### patch
Update of few properties of something
