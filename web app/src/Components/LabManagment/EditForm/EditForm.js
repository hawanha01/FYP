// import React, { useState, useEffect } from 'react';
// import salmanpic from '../../../assets/salmanPic.jpeg';
// import labPic from '../../../assets/lab.jpeg';
// import './EditForm.css';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { Button } from 'bootstrap';

// // function getData()
// // {
// //   axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
// //     console.table(res.data)
// // })

// const EditForm = () => {
//   const [backendData, setBackendData] = useState([]);

//   useEffect(() => {
//     axios({
//       url: "http://localhost:5000/profile",
//       method: "GET",
//     })
//       .then((response) => {
//         console.log("Data has been retreived the server");
//         setBackendData(response["data"]);
//       })
//       .catch(() => {
//         console.log("Internal server error");
//       });
//   }, []);

//   return (
//     <div>
//       {(typeof backendData.tests === 'undefined') ? (
//         <p>Loading...</p>
//       ): (
//         backendData.tests.map((test,i) =>(
//           <p key={i}>{test}</p>
//         ))
//       )}
//     </div>
//   );
// };

// export default EditForm;

import React, { useState, useEffect } from 'react';
import salmanpic from '../../../assets/salmanPic.jpeg';
import labPic from '../../../assets/lab.jpeg';
import './EditForm.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'bootstrap';

// function getData()
// {
//   axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
//     console.table(res.data)
// })

const EditForm = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=diseases'
      );
      setData(result.data);
    };

    fetchData();
    axios({
      url: "http://localhost:5000/profile",
      method: "GET",
      headers:{"Authorization" : `${localStorage.getItem("token")}`}
    })
      .then((response) => {
        if (response.data.success){
          setUser(response.data.users)
          console.log("Data has been retreived the server");
        }
      })
      .catch(() => {
        console.log("Internal server error");
      });
  }, []);

  return (
    <div class=" company-profile ">
      <form method="post">
        <div class="row">
          <div class="col-md-4 ">
            <div class="">
              <div>
                <div className="row col-12">
                  <div className="">
                    <div className="text-center">
                      <img
                        src={labPic}
                        className="avatar img-circle img-thumbnail"
                        alt="avatar"
                      />
                      <input type="file" className="col-offset-8 " />
                      <h6>Upload a different photo...</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="profile-head">
              <h2 className="display-2 ml-2 ml-lg-0">Pro Safey Lab</h2>
              <h2 className="text-danger ml-2 ml-lg-0">Powered by LaBox</h2>
              <p class="proile-rating fs-4">
                RANKINGS : <span className="fs-4 text-success">8/10</span>
              </p>

              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Lab Tests
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row p-5">
          <div class="col-md-4">
            <div>
              <h2>Popular Lab Tests</h2>

              <ol class="rounded-list">
                <li>
                  <a href="">Complete blood count</a>
                </li>
                <li>
                  <a href="">Basic metabolic panel</a>
                </li>
                <li>
                  <a href="">Lipid panel</a>
                </li>

                <li>
                  <a href="">Covid 19</a>
                </li>
                <li>
                  <a href="">HIV</a>
                </li>
                <li>
                  <a href="">Hepatitis</a>
                </li>
              </ol>
            </div>
          </div>
          <div class="col-md-8">
            <div class="tab-content profile-tab" id="myTabContent">
              <div
                className="col-sm-6"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="row">
                  <div class="col-md-12 ">
                    <label className="display-5 ">Company ID</label>
                  </div>
                  <div class="col-md-12">
                    <h3 className="text-primary">Saftey-LabOx03</h3>
                  </div>
                </div>
                <div class="row"></div>
                <div class="row">
                  <div class="col-md-12">
                    <label className="display-5">Email</label>
                  </div>
                  <div class="col-md-12">
                    <h3 className="text-primary">safteyLab@labox.com</h3>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <label className="display-5">Phone</label>
                  </div>
                  <div class="col-md-12">
                    <h3 className="text-primary">123 456 7890</h3>
                  </div>
                </div>
              </div>

              <div
                className="col-sm-6"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div class="row ">
                  <div class="col-md-12">
                    <label className="display-5">
                      Complete Blood Count Test
                    </label>
                  </div>
                  <div class="col-md-12">
                    <h3 className="text-primary">18000Rs</h3>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <label className="display-5">Hepatitis</label>
                  </div>
                  <div class="col-md-12">
                    <h3 className="text-primary">2349Rs</h3>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <label className="display-5"> Covid 19</label>
                  </div>
                  <div class="col-md-12">
                    <h3 className="text-primary">999Rs</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <ol className="rounded-list">
        <ul>
        {(typeof user.tests === 'undefined') ? (
          <p>Loading...</p>
        ): (
          user.tests.map((test,i) =>(
            <li key={i}><a href="#">{test.name}</a></li>
          ))
        )}
        </ul>
      </ol>

      <p className="text-center">
        <Link to="/TestPage" className="text-primary fs-4 ">
          <button className="btn btn-primary">Add Test</button>
        </Link>
      </p>
    </div>
  );
};

export default EditForm;
