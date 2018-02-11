# server vs client

## concurrently serving server/index.js and server/client/

This project used create-react-app to generate the client directory inside of the server directory. The boilerplate generated from create-react-app contains a server for serving up that client side code. Therefore, to boot up both our express and client side servers for development purposes, we need to do the following:

1. yarn add concurrently --dev
2. define script: "server": "nodemon server/index.js"
3. define script: "client": yarn run start --prefix server/client"

note: --prefix is used to run a package.json script in a relative child directory from the current working parent directory.

4. define script: "dev: concurrently \"yarn run server\" \"yarn run client\""
5. start up using yarn run dev

*important note*: using the dev script is going to start up servers on two different ports. When writing code in the client, it is assumed the URI that the client is being retrieved from is the same as the servers. In our current architecture, this is false. The server is running on a different port from the client. This creates a predicament.

## client package.json proxy property

"In computer networks, a proxy server is a server (computer system or application) that acts as an intermediary for requests from clients seeking resources from other servers"