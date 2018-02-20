# Server-side Billing

The server is currently handling billing with the Stripe module

## Using Stripe

When requiring the module you need to pass your stripe account secret key to the return value (function) of the require statement <require('stripe')(secretKey)>.