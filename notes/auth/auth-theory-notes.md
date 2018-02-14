# Authentication Theory

When a user logs into our application and makes follow up HTTP requests, how does our server know they are logged in, or who they are?

## HTTP is stateless

This means that HTTP requests have no knowledge of previous HTTP requests.

## Cookie Based Auth

Cookies are a browser mechanism for storing stateful information. When our server sends the browser a cookie, the browser will strip the cookie from our request and store it locally. When the browser with the stored cookie makes subsequent requests to our server, the browser will automatically attach this cookie to requests, thus allowing our server to identify the correct user and to identify other information.

## CORS

If the browser is pointing to our servers domain, and a script runs to make a request to a different domain, the browser takes a precautionary measure and doesn't attach the authentication cookie we defined to the request. This type of request is also known as a Cross Origin Request, and is assumed by the browser to be malicious.