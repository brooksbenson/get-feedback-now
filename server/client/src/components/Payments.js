import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        title={'Get Feedback Now'}
        description={'$5 for 5 Campaigns'}
        amount={500}
        token={token => this.props.handleStripeToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className='btn'>
          Pay With Card
        </button>
      </StripeCheckout>
    );
  }
}