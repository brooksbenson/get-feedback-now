import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const NewSurvey = () => <h2>NewSurvey</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => (
  <div className='container'>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/surveys' component={Dashboard} />
        <Route path='/surveys/new' component={NewSurvey} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;