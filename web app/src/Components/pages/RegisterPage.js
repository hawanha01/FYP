import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik'
import './RegisterPage.css';

import { TextField } from '@material-ui/core';
import { Redirect } from 'react-router';
import axios from 'axios';
import '../../App.css';
export default function SignUpPage() {
  const [isSignup, setIsSignup] = useState(false)
  if (isSignup) {
    return <Redirect to = {{ pathname: "/login" }} />;
  }
  return (
    <div className="text-center m-5-auto parent2">
      <h2 className="fs-3">Join us</h2>
      <h4 className="fs-5">Create your personal account</h4>
      <Formik initialValues={{ username: "", email: "", password: "" }}
      onSubmit={(data) => {
        // setSubmitting(true)
        console.log(data)
        axios.post("http://localhost:5000/register", data )
          .then((response) => {
            console.log("Data has been retreived the server");
            setIsSignup(true)
          })
          .catch(() => {
            console.log("Internal server error");
          });
        // setSubmitting(false)
      }}>
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <p>
              <label className="fs-3">Username</label>
              <br />
              <TextField name="username" value={values.username} onChange={handleChange} onBlur={handleBlur} required />
            </p>
            <p>
              <label className="fs-3">Email address</label>
              <br />
              <TextField name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} required />
            </p>
            <p>
              <label className="fs-3">Password</label>
              <br />
              <TextField name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} required />
            </p>
            <p>
              <input type="checkbox" name="checkbox" id="checkbox" required />{' '}
              <span className="fs-5">
                I agree all statements in{' '}
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  terms of service
                </a>
              </span>
              .
            </p>
            <p>
              <button id="sub_btn" type="submit">
                Register
              </button>
            </p>
            <pre>{JSON.stringify(values)}</pre>
          </form>
        )}
      </Formik>
      <footer>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
