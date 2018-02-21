const keys = require('./../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('./../middleware/require-login');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {

    await stripe.charges.create({
      source: req.body.id,
      amount: 500,
      currency: 'usd',
      description: '5 dollars for 5 campaigns'
    });

    req.user.credits += 5;
    res.send(await req.user.save());
  });
}