import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './Components/pages/LandingPage';
import LoginPage from './Components/pages/LoginPage';
import RegisterPage from './Components/pages/RegisterPage';
import ForgetPasswordPage from './Components/pages/ForgetPasswordPage';
import HomePage from './Components/pages/HomePage';

import './App.css';
import EditForm from './Components/LabManagment/EditForm/EditForm';
import FormSample from './Components/pages/FormSample';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/forget-password" component={ForgetPasswordPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/profile" component={EditForm} />
          <Route path="/TestPage" component={FormSample} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

const Footer = () => {
  return (
    <p className="text-center" style={FooterStyle}>
      Designed & coded by <a>Labox</a>
    </p>
  );
};

const FooterStyle = {
  background: '#222',
  fontSize: '.8rem',
  color: '#fff',
  position: 'relative',
  bottom: 0,
  padding: '1rem',
  margin: 0,
  width: '100%',
  opacity: '.5'
};
