import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Icons
import { FiCalendar, FiMessageCircle, FiLogOut, FiUsers } from 'react-icons/fi';

import { CardDashboard, Card } from '../../Card/Card';
import { Table } from '../../Table/Table';
import { getToken } from '../../../services/auth';
import AdminChart from '../../AdminChart/AdminChart';
import BarChart from '../../AdminChart/BarChart';
import PieChart from '../../AdminChart/PieChart';
import EditForm from '../EditForm/EditForm';

const config = {
  headers: {
    Authorization: `Bearer ${getToken}`
  }
};

let array = [
  {
    id: 1,
    name: 'Salman Saeed'
  },
  {
    id: 2,
    name: 'Faisal Shahzad'
  },
  {
    id: 3,
    name: 'Hamza'
  },
  {
    id: 4,
    name: 'Khazima'
  }
];

export default function Dashboard() {
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-4 title">
          <h3>Lab Details</h3>
        </div>

        <div className="col-6 title">
          <h1 style={{ color: '' }}> LaBox</h1>
        </div>
        <div className="col-2 display-4">
          <Link to="/profile">Account</Link>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3">
          <CardDashboard className="red">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <div className="title">Total Patients</div>
                  <div className="number pulsate">34</div>
                </div>
                <div className="col-auto">
                  <FiCalendar size="3em" />
                </div>
              </div>
            </div>
          </CardDashboard>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3">
          <CardDashboard className="blue">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <div className="title">Pending patients</div>
                  <div className="number pulsate">6</div>
                </div>
                <div className="col-auto">
                  <FiMessageCircle size="3em" />
                </div>
              </div>
            </div>
          </CardDashboard>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3">
          <CardDashboard className="green">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <div className="title">Died Patients</div>
                  <div className="number pulsate">0</div>
                </div>
                <div className="col-auto">
                  <FiMessageCircle size="3em" />
                </div>
              </div>
            </div>
          </CardDashboard>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <CardDashboard className="orange">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <div className="title">Users</div>
                  <div className="number pulsate">715</div>
                </div>
                <div className="col-auto">
                  <FiUsers size="3em" />
                </div>
              </div>
            </div>
          </CardDashboard>
          <br />
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <AdminChart />
        </div>
        <div className="col-md-12 col-lg-6">
          <BarChart />
        </div>
        {/* <div className="col-md-12 col-lg-4">
            <PieChart />
          </div> */}
      </div>
      <div className="col-12 px-0">
        <Card className="red">
          <div className="card-title">
            <h3>Patients</h3>
          </div>
          <div className="card-body">
            <Table>
              <thead>
                <tr>
                  <th className="col-1 text-center">#</th>
                  <th className="col-8 text-center">Patient Name</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {array.map(item => (
                  <tr>
                    <td style={{ textAlign: 'center' }}>{item.id}</td>
                    <td style={{ textAlign: 'center' }}>{item.name}</td>
                    <td style={{ textAlign: 'center' }}>
                      <button className="edit">Accept</button>
                      <button className="info">Reject</button>
                      {/* <button className="eraser">Trash</button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card>
      </div>
    </>
  );
}
