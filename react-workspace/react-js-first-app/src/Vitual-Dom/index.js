import React, { Component } from "react";

const SubComponent = ({ subTtitle }) => <h3>{subTtitle}</h3>;

class App extends Component {
  state = {
    title: "React js applictaion",
  };
  count = 0;
  componentDidMount() {
    let { title } = this.state;
    setInterval(() => {
      if (this.count % 5 === 0) {
        if (title === "React js applictaion") {
          title = " React JS with Virtual DOM";
        } else {
          title = "ReactJS Application ";
        }
      }
      this.setState({ title });
      console.log("updating", this.count++, "times");
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <SubComponent subTtitle={"this is subTtitle"} />
      </div>
    );
  }
}

export default App;
