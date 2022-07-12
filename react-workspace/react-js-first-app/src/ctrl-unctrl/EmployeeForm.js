import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class EmployeeForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    pic: "",
    formError: {
      name: "Name required",
      email: "Email required",
      contact: "Contact required",
    },
  };
  tfHandler = (evt) => {
    // let name = evt.target.name;
    // let value = evt.target.value;
    // console.log(name, value);
    // version 1
    // let modifiedState = {};
    // modifiedState[name] = value;
    // this.setState(modifiedState);
    // console.log(this);

    this.setState({ [evt.target.name]: evt.target.value });
    let { name, value } = evt.target;
    console.log(name, value);

    let { formError } = { ...this.state };
    switch (name) {
      case "name":
        if (!value || value.length === 0) {
          formError.name = "Name Required";
        } else if (value.length < 3 || value.length > 20) {
          formError.name = "name must be between 3 and 20 chars";
        } else {
          formError.name = "";
        }
        break;
      case "email":
        break;
      case "contact":
        break;

      default:
        break;
    }
    //re-render
    this.setState({ [name]: value, formError });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="alert alert-danger">Controlled component</h3>
            <form className="form-group" onSubmit={this.submitHandler}>
              <div className="form-group row">
                <label htmlFor="">Employee Name</label>
                <div className="col-md-8">
                  <input
                    onChange={this.tfHandler}
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email">Employee Email</label>
                <div className="col-md-8">
                  <input
                    onChange={this.tfHandler}
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email">Employee Contact</label>
                <div className="col-md-8">
                  <input
                    onChange={this.tfHandler}
                    type="text"
                    name="Contact"
                    id="Contact"
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="picture">Employee Picture</label>
                <div className="col-md-8">
                  <input
                    onChange={this.tfHandler}
                    type="text"
                    name="picture"
                    id="picture"
                    className="form-control"
                  ></input>
                </div>
              </div>
              <button className="btn btn-primary">Save Employee</button>
            </form>
          </div>
          <div className="col">
            <h2>Current State Value</h2>
            <pre>{JSON.stringify(this.state, null, 3)}</pre>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeForm;
