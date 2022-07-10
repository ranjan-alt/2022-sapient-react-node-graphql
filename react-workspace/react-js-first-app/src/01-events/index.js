import React, { Component } from "react";
import "./app.css";
// import "bootstrap/dist/css/bootstrap.css";
import Btn1 from "./Btn";

const Btn = (props) => {
  return (
    <button className="btn btn-danger" onClick={props.handler}>
      {props.caption}
    </button>
  );
};

class App extends Component {
  //   constructor() {
  //     super();
  //     this.btnHandler = this.btnHandler.bind(this);
  //   }
  //   btnHandler() {
  //     console.log("you invoked btn handler", this);
  //   }
  btnHandler = () => {
    console.log("you invoked btn handler", this);
  };
  state = { num: 0 };
  increment = () => {
    console.log("state value is what", this.state.num);
    // dont mutate the state object directly insted use setState
    // this.state.num++;

    // when you mutate the value using setStet it does two things 1- mutation 2- re-render
    this.setState({ num: this.state.num + 1 });
  };

  decrement = () => {
    this.setState({ num: this.state.num - 1 });
  };

  incrementOrDecrement = (incDecVal) => {
    this.setState({ num: this.state.num + incDecVal });
  };
  render() {
    // let num = 0; or

    // never call setState in render

    return (
      <div className="app-content">
        <h3>This is the content area of application</h3>
        {/* in this function has to be explicitely bind */}
        {/* <button
          onClick={this.btnHandler.bind(this)}
          className="btn btn-primary"
        >
          Click me
        </button> */}
        <button onClick={this.btnHandler} className="btn btn-primary">
          Click me
        </button>

        {/* increment */}

        <h3>value of num is {this.state.num}</h3>
        <button className="btn btn-primary" onClick={this.increment}>
          increment
        </button>
        <button className="btn btn-danger" onClick={this.decrement}>
          decrement
        </button>

        <hr />

        <button
          className="btn btn-primary"
          onClick={() => this.incrementOrDecrement(1)}
        >
          increment
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.incrementOrDecrement(-5)}
        >
          decrement
        </button>
        <hr />

        {/* one more way  */}

        <Btn caption="INCR" handler={() => this.incrementOrDecrement(1)} />
        <Btn caption="DECR" handler={() => this.incrementOrDecrement(-1)} />
        <hr />

        <Btn1
          caption="INCR"
          handler={() => this.incrementOrDecrement(1)}
          val={this.state.num}
        />
        <Btn1 caption="DECR" handler={() => this.incrementOrDecrement(-1)} />
      </div>
    );
  }
}

export default App;
