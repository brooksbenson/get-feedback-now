import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

  renderOptions() {
    let options;
    switch (this.props.isLoggedIn) {
      case null: break;
      case false:
        options = <li><a href='/auth/google'>Login With Google</a></li>;
        break;
      default:
        options = [
          <li key={'payments'}>
            <Payments
              handleStripeToken={this.props.handleStripeToken}
            />
          </li>,
          <li key={'logout'}>
            <a href='api/logout'>Logout</a>
          </li>
        ];
    }
    return options;
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