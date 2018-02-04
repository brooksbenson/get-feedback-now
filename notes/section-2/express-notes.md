# Servers

Running servers listen for HTTP requests on a port. A port can be thought of as door where HTTP requests can be routed. Node.js in specific is the program listening for requests on a particular port, and when it receives one, it will pass it on the the Express.js part of the server. Express will look at the request and decide what part of our application should handle the request; these parts of the application are called route handlers. Using Express, we can define a series of route handlers that process requests for certain resources.

## Node.js

Node is an asynchronous server framework that runs JavaScript programs, thus making it possible for JavaScript to manipulate a machines local file system and to send and process data. Because Node is asychronous, a JavaScript program can be written to run asynchronously,creating a non-blocking program architecture.

## Express.js

Express is a Node.js web application framework that provides a robust set of features for creating APIs.

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
