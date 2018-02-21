import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

  renderOptions() {
    switch (this.props.user) {
      case null: return;
      case false:
        return <li><a href='/auth/google'>Login With Google</a></li>;
      default:
        return [
          <li key={1}>
            <Payments handleStripeToken={this.props.handleStripeToken} />
          </li>,
          <li key={2}>
            Credits: {this.props.user.credits}
          </li>,
          <li key={3}>
             <a href='api/logout'>Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link
            className='brand-logo' 
            to={this.props.isLoggedIn ? '/surveys' : '/'} >
            Get Feedback Now 
          </Link> 
          <ul className='right'> {this.renderOptions()} </ul>
        </div>
      </nav>
    );
  }
};

export default Header;