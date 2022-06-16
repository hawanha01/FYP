import React from 'react';
import { Link } from 'react-router-dom';

import './LoginPage.css';

export default function SignInPage() {
  return (
    <div className="text-center m-5-auto pt-5 parent">
      <h1>Sign in to us</h1>
      <form action="/home" className='child'>
        <h2>
          <label>Username or email address</label>
          <br />
          <input type="text" name="first_name" required />
        </h2>
        <h2>
          <label>Password</label>
          <Link to="/forget-password">
            <h4 className="right-label ">Forget password?</h4>
          </Link>

          <input type="password" name="password" required />
        </h2>
        <p>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </p>
      </form>
      <footer>
        <h3>
          First time? <Link to="/register">Create an account</Link>.
        </h3>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
