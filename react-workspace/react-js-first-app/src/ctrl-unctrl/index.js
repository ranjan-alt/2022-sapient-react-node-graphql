import React, { Component } from "react";
import ProductForm from "./ProductForm";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="alert alert-info">
          Working with uncontrolled component
        </h1>
        <div className="row">
          <div className="col">
            <ProductForm />
          </div>
          <div className="col">Other works</div>
        </div>
      </div>
    );
  }
}

export default App;
