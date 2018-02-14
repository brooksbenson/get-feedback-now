import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className='nav-wrapper'>
            <a href='#' className='brand-logo'>
              Get Feedback Now
            </a>
            <ul className='right'>
              <li>
                <a>Login With Google</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
};

export default Header;