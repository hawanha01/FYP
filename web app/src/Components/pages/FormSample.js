import React,{useEffect,useState} from 'react';
import * as fs from 'fs';
import './FormSample.css';

class FormSample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tname: '',
      testprice: '',
      Category: '',
      description: '',
      data: []
    };
  }

  handleFormSubmit(event) {
    var fs = require('browserify-fs');
    event.preventDefault();
    let items = [...this.state.data];
    items.push({
      tname: this.state.tname,
      testprice: this.state.testprice,
      Category: this.state.Category,
      description: this.state.description
    });
    this.setState({
      items
      // tname:'',
      // testprice:'',
      // Category:'',
      // description:'',
    });
    // console.log(this.state);
    // console.log(items);

    fs.writeFile('./data.js', items, function(err) {
      if (err) console.log(err);
      else console.log('success');
    });

    // Reading data from the 'file.txt' file

    fs.readFile('./data.js', (err, items) => {
      // error handling using throw
      if (err) throw err;
      // showing fetched data from the file onto the console
      console.log(items.toString());
    });
  }



  render() {
    return (
      <div className="form1 formt ">
        <div className="pt-5 mt-5">
          <form action="#">
            <label className="fs-4">Test name</label>
            <br />
            <input
              className="fs-4"
              type="text"
              id="tname"
              name="firstname"
              placeholder="Test name..."
              value={this.state.tname}
              onChange={e => this.setState({ tname: e.target.value })}
            />
            <br />
            <label className="fs-4">Test Price</label>
            <br />
            <input
              className="fs-4"
              type="text"
              id="testprice"
              name="lastname"
              placeholder="Enter Price"
              value={this.state.testprice}
              onChange={e => this.setState({ testprice: e.target.value })}
            />
            <br />
            <label className="fs-4">Category</label>
            <br />
            <input
              className="fs-4"
              type="Category"
              id="Category"
              name="Category"
              placeholder="Category"
              value={this.state.Category}
              onChange={e => this.setState({ Category: e.target.value })}
            />
            <br />
            <label className="fs-4">description</label>
            <br />
            <textarea
              className="fs-4"
              id="description"
              name="description"
              placeholder="write..."
              value={this.state.description}
              onChange={e => this.setState({ description: e.target.value })}
            />
            <br />
            <div className="pt-5 mt-5">
              <input
                className="fs-4 btn-primary"
                type="submit"
                value="Add Test"
                onClick={e => this.handleFormSubmit(e)}
              />
            </div>

            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default FormSample;
