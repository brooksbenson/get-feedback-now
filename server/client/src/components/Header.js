import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  renderAuthStatus() {
    switch (this.props.isLoggedIn) {
      case null: 
        return 'Pending';
      case false: 
        return <a href='/auth/google'> Login with Google </a>;
      default: 
        return <a href='/api/logout'> Logout </a>;
    }
  }

  giveHomeRoute() {
    return 
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
        <ul className='right'>
          <li>{this.renderAuthStatus()}</li>
        </ul>
        </div>
      </nav>
    );
  }
};

export default Header;