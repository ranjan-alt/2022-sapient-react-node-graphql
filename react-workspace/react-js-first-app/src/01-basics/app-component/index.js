import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export default class AppComponent extends Component {
  render() {
    const msg = "hello world";
    return (
      <div>
        <h1>
          {msg} {this.props.name}
        </h1>
        ;
      </div>
    );
  }
}
