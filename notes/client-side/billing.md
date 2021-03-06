# Billing

## Rules of Thumb

1. Never accept raw credit card numbers
2. Never store credit card numbers
3. Always use an outside payment processor

## Stripe

Stripe is a service that handles online payments. They provide a simple to use API for processing transactions within applications.

### Stripe Keys

A stripe account will provide some API keys. These keys should be stored in server/config

### Stripe Checkout

Checkout is a 3rd party embeddable payment form for applications. It comes in the form of an NPM modules.

### Stripe Checkout React

The native version of Stripe Checkout isn't exactly compatible with React, to make it so, we use the stripe checkout react npm module, a stripe checkout wrapper component.

#### Stripe Checkout React API

*note*: To replace default button, pass a custom child element.
- amount: number -- US cents
- token: function -- callback that receives the response data from the Stripe servers
- stripeKey: string -- an API key provided to us by Stripe

For more info, checkout docs: https://www.npmjs.com/package/react-stripe-checkout