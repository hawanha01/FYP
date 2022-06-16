import React, { useEffect } from 'react';
import "./Dashboard2.css"

const Dashboard2=()=>{
    return(

        <>
        <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">AdminStrap</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="index.html">Dashboard</a></li>
            <li><a href="pages.html">Pages</a></li>
            <li><a href="posts.html">Posts</a></li>
            <li><a href="users.html">Users</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Welcome, Brad</a></li>
            <li><a href="login.html">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>


    <section id="breadcrumb">
      <div className="container">
        <ol className="breadcrumb">
          <li className="active">Dashboard</li>
        </ol>
      </div>
    </section>

    <section id="main">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group">
              <a href="index.html" className="list-group-item active main-color-bg">
                <span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
              </a>
              <a href="pages.html" className="list-group-item"><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Pages <span className="badge">12</span></a>
              <a href="posts.html" className="list-group-item"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> Posts <span className="badge">33</span></a>
              <a href="users.html" className="list-group-item"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> Users <span className="badge">203</span></a>
            </div>

            <div className="well">
              <h4>Disk Space Used</h4>
              <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"  style={{width:"60%"}}>
                      60%
              </div>
            </div>
            <h4>Bandwidth Used </h4>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:"40%"}}>
                    40%
            </div>
          </div>
            </div>
          </div>
          <div className="col-md-9">
            {/* <!-- Website Overview --> */}
            <div className="panel panel-default">
              <div className="panel-heading main-color-bg">
                <h3 className="panel-title">Website Overview</h3>
              </div>
              <div className="panelBody">
                <div className="col-md-3">
                  <div className="well dash-box">
                    <h2><span className="glyphicon glyphicon-user" aria-hidden="true"></span> 203</h2>
                    <h4>Users</h4>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="well dash-box">
                    <h2><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span> 12</h2>
                    <h4>Pages</h4>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="well dash-box">
                    <h2><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> 33</h2>
                    <h4>Posts</h4>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="well dash-box">
                    <h2><span className="glyphicon glyphicon-stats" aria-hidden="true"></span> 12,334</h2>
                    <h4>Visitors</h4>
                  </div>
                </div>
              </div>
              </div>

              {/* <!-- Latest Users --> */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Latest Users</h3>
                </div>
                <div className="panel-body">
                  <table className="table table-striped table-hover">
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joined</th>
                      </tr>
                      <tr>
                        <td>Jill Smith</td>
                        <td>jillsmith@gmail.com</td>
                        <td>Dec 12, 2016</td>
                      </tr>
                      <tr>
                        <td>Eve Jackson</td>
                        <td>ejackson@yahoo.com</td>
                        <td>Dec 13, 2016</td>
                      </tr>
                      <tr>
                        <td>John Doe</td>
                        <td>jdoe@gmail.com</td>
                        <td>Dec 13, 2016</td>
                      </tr>
                      <tr>
                        <td>Stephanie Landon</td>
                        <td>landon@yahoo.com</td>
                        <td>Dec 14, 2016</td>
                      </tr>
                      <tr>
                        <td>Mike Johnson</td>
                        <td>mjohnson@gmail.com</td>
                        <td>Dec 15, 2016</td>
                      </tr>
                    </table>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>

    <footer id="footer">
      <p>Copyright AdminStrap, &copy; 2017</p>
    </footer>

    {/* <!-- Modals --> */}

    {/* <!-- Add Page --> */}
    <div className="modal fade" id="addPage" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <form>
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title" id="myModalLabel">Add Page</h4>
      </div>
      <div className="modal-body">

        <div className="form-group">
          <label>Page Title</label>
          <input type="text" className="form-control" placeholder="Page Title"/>
        </div>

        <div className="form-group">
          <label>Page Body</label>
          <textarea name="editor1" className="form-control" placeholder="Page Body"></textarea>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox"/> Published
          </label>
        </div>
        <div className="form-group">
          <label>Meta Tags</label>
          <input type="text" className="form-control" placeholder="Add Some Tags..."/>
        </div>
        <div className="form-group">
          <label>Meta Description</label>
          <input type="text" className="form-control" placeholder="Add Meta Description..."/>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save changes</button>
      </div>
    </form>
    </div>
  </div>
</div>
</>

    )
}

export default Dashboard2;