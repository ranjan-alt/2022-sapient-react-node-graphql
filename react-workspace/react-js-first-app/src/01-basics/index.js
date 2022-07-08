import React, { Component } from "react";
import AppHeader from "./app-header/AppHeader";
import AppFooter from "./app-footer/AppFooter";
import AppComponent from "./app-component";
// import AppComponent from "./01-basics/app-component";

class App extends Component {
  render() {
    const footerProps = {
      company: "publicis sapient",
      year: 2022,
      website: "ps.com",
    };
    return (
      <div>
        <AppHeader title="Publicis Sapient" location="bengaluru " />
        <AppComponent name="ranjan" />
        {/* <AppFooter
          company={footerProps.company}
          year={footerProps.year}
          website={footerProps.website}
        /> */}
        {/* instead of doing so we can take use of destructuring  */}
        <AppFooter {...footerProps} />;
      </div>
    );
  }
}

export default App;
