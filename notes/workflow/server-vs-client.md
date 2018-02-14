# server vs client

## concurrently serving server/index.js and server/client/

This project used create-react-app to generate the client directory inside of the server directory. The boilerplate generated from create-react-app contains a server for serving up that client side code. Therefore, to boot up both our express and client side servers for development purposes, we need to do the following:

1. yarn add concurrently --dev
2. define script: "server": "nodemon server/index.js"
3. define script: "client": yarn run start --prefix server/client"

####note 
--prefix is used to run a package.json script in a relative child directory from the current working parent directory.

4. define script: "dev: concurrently \"yarn run server\" \"yarn run client\""
5. start up using yarn run dev

*important note*: using the dev script is going to start up both the express and create-react-app servers. If we write relative routes in the client-side code and expect them to communicate with our express server, they wont. To fix this, we need to setup proxies for requests to certain routes so that they **do** communicate with the express server.

### setting up client/package.json proxy property

1. declare proxy property and set it equal to an object
2. declare a property within proxy that is named the relative route to set up a proxy for (ex. "/auth/google") and set it equal to an object
3. declare a property within the relative route prop and set it equal to the URI to make requests to (ex. http://localhost:5000)