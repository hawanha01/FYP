import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';
import './LandingPage.css';
import BackgroundImage from '../../assets/images/lab.jpeg';

export default function LandingPage() {
  return (
    <header style={HeaderStyle}>
      <div className="text-center parent">
        <h1 className="main-title text-center text-center display-2">
          login / register page
        </h1>

        <p className="main-para text-center">
          join us now and don't waste time
        </p>
        <div className="buttons text-center">
          <Link to="/login">
            <button className="btn-primary fs-4 ">log in</button>
          </Link>
          <Link to="/register">
            <button className="btn-primary  fs-4" id="reg_btn">
              <span>register </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

const HeaderStyle = {
  width: '100%',
  height: '100vh',
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};
