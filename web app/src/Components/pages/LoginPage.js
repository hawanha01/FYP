import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik'
import { TextField } from '@material-ui/core';
import { Redirect } from 'react-router';
import axios from 'axios';
import './LoginPage.css';

export default function SignInPage() {
  const [isSignin, setIsSignin] = useState(false)
  if (isSignin) {
    return <Redirect to = {{ pathname: "/home" }} />;
  }
  return (
    <div className="text-center m-5-auto pt-5 parent">
      <h1>Sign in to us</h1>
      <Formik initialValues={{ email: "", password: "" }}
      onSubmit={(data) => {
        // setSubmitting(true)
        console.log(data)
        axios.post("http://localhost:5000/login", data )
          .then((response) => {
            console.log("Data has been retreived the server");
            if (response.data.success){
              localStorage.setItem("token",`${response.data.token}`)
              setIsSignin(true)
            }
          })
          .catch(() => {
            console.log("Internal server error");
          });
        // setSubmitting(false)
      }}>
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h2>
              <label>Username or email address</label>
              <br />
              <TextField name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} required />
            </h2>
            <h2>
              <label>Password</label>
              <Link to="/forget-password">
                <h4 className="right-label ">Forget password?</h4>
              </Link>

              <TextField name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} required />
            </h2>
            <p>
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </p>
          </form>
        )}
      </Formik>
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
