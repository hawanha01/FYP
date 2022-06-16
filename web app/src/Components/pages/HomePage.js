import React from 'react';
import ReactDOM from 'react-dom';
import './HomePage.css';
import EditForm from '../../Components/LabManagment/EditForm/EditForm';
import backgroundImage from '../../assets/bg2.jpg';
import Dashboard from '../../Components/LabManagment/Dashboard/Dashboard';
import Dropzone from '../../Components/Dropzone/Dropzone';
import Dashboard2 from '../../Components/Dashboard2/Dashboard2';
import LoginPage from '../../Components/LoginPage/LoginPage';

function HomePage() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      {/* <EditForm /> */}
      <Dashboard />
      {/* <Dropzone /> */}
    </div>
  );
}

export default HomePage;
