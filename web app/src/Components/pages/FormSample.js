import React,{useEffect,useState} from 'react';
import * as fs from 'fs';
import './FormSample.css';
import { TextField } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route ,useHistory} from 'react-router-dom';
import EditForm from '../LabManagment/EditForm/EditForm.js';
import axios from 'axios';
import { Formik } from 'formik'
class FormSample extends React.Component {

  render() {
    return (
      <div className="form1 formt ">
        <div className="pt-5 mt-5">
        <Formik initialValues={{ name: "", category: "", description: "" }}
          onSubmit={(data) => {
            // setSubmitting(true)
            console.log(data)
            axios.post("http://localhost:5000/TestPage", data, {
              headers:{"Authorization" : `${localStorage.getItem("token")}`}
            })
              .then((response) => {
                console.log(response.data.success)
                if (response.data.success){
                  console.log("in if",this.props.history.push)


                  this.props.history.push("/profile")
                }
                console.log("Data has been retreived the server");
              })
              .catch(() => {
                console.log("Internal server error");
              });
            // setSubmitting(false)
          }}>
          {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
            <label className="fs-4">Test name</label>
            <br />
            <TextField name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} required />
            <br />
            <label className="fs-4">Category</label>
            <br />
            <TextField name="category" value={values.category} onChange={handleChange} onBlur={handleBlur} required />
            <br />
            <label className="fs-4">description</label>
            <br />
            <TextField name="description" value={values.description} onChange={handleChange} onBlur={handleBlur} required />
            <br />
            <div className="pt-5 mt-5">
              <button className="fs-4 btn-primary" type="submit"> Add Test </button>
            </div>

            <br />
            </form>
          )}
        </Formik>
        </div>
      </div>
    );
  }
}

export default FormSample;
