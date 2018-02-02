## Initialization

- Created server directory inside of the application root
- Ran yarn init inside of server directory
- Ran yarn add express inside of server directory

## Node.js vs Express.js

Express runs in the Node.js environment.

### Node.js

Node is an asynchronous server framework that runs JavaScript programs, thus making it possible for JavaScript to manipulate a machines local file system, and to send and process data. Because Node is asychronous, a JavaScript program can be written to run asynchronously, creating a non-blocking program architecture.

### Express.js

Express is a Node.js web application framework that provides a robust set of features for web and mobile applications. It provides a rich set of features for creating robust APIs.

```
const express = require('express');
```
Node.js supports the common JS module pattern for including modules is a program.

```
const app = express();
```

The return result from express is our running express server. In subsequent parts of the program, route handlers will be assigned to it.

```
app.get(...);
```

A method that creates a brand new route handler. This route handler is looking for very specific HTTP requests.

####HTTP requests

HTTP request methods are used to indicate the type of action the request is trying to take.


#### Servers

Running servers listen for HTTP requests on a port. A port can be thought of as door where HTTP requests can be routed. Node.js in specific is the program listening for requests on a particular port, and when it receives one, it will pass it on the the Express.js part of our server. Express will look at the request and decide what part of our application should handle the request; these parts of the application are called route handlers. Using Express, we can define a series of route handlers that process requests for certain resources.

