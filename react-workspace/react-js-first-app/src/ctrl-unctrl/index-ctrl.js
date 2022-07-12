import React, { Component } from "react";
import EmployeeForm from "./EmployeeForm";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="alert alert-info">Working with controlled component</h1>
        <div className="row">
          <EmployeeForm />
        </div>
      </div>
    );
  }
}

export default App;
