import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './../actions/index';

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>;
const NewSurvey = () => <h2>NewSurvey</h2>;

class App extends Component {

  componentDidMount() {
    this.props.fetchUserStatus();
  }

  render() {
    return (
      <div className='container'> 
        <BrowserRouter>
          <div>
            <Header 
              user={this.props.user} 
              handleStripeToken={this.props.handleStripeToken}  
            />
            <Route exact path='/' component={Landing} />
            <Route exact path='/surveys' component={Dashboard} />
            <Route path='/surveys/new' component={NewSurvey} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps, actions)(App);