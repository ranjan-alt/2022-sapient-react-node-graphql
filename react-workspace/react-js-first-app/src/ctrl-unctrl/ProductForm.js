// to show working of uncontrolled components

import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class ProductForm extends Component {
  addProduct = (event) => {
    event.preventDefault();
    console.log("product form submitted");
    const name = this.refs.name.value;
    const price = this.refs.price.value;
    const description = this.refs.description.value;
    const pic = this.refs.pic.value;
    const p1 = { name, price, description, pic };
    console.log(p1);
  };
  render() {
    return (
      <div className="container">
        <h3>Product Form</h3>
        <form className="form" onSubmit={this.addProduct}>
          <div className="form-group row">
            <label htmlFor="name" className="control-label col-md-4">
              Product Name
            </label>
            <div className="col-md-8">
              <input
                type="text"
                id="name"
                name=""
                className="form-control"
                ref="name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="price" className="control-label col-md-4">
              Product Price
            </label>
            <div className="col-md-8">
              <input
                type="text"
                id="price"
                name=""
                className="form-control"
                ref="price"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="description" className="control-label col-md-4">
              Product description
            </label>
            <div className="col-md-8">
              <input
                type="text"
                id="description"
                name=""
                className="form-control"
                ref="description"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="description" className="control-label col-md-4">
              Product Pic
            </label>
            <div className="col-md-8">
              <input
                type="text"
                id="pic"
                name=""
                className="form-control"
                ref="pic"
              />
            </div>
          </div>
          <button className="btn btn-danger">Sve product</button>
        </form>
      </div>
    );
  }
}

export default ProductForm;
