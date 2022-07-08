import React, { Component } from "react";
import "./app-header.css";

class AppHeader extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <h1>
          site for {this.props.title}located at {this.props.location}
        </h1>
      </>
    );
  }
}

export default AppHeader;
