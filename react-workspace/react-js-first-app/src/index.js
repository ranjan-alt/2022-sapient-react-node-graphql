import ReactDOM from "react-dom";
// import App from "./01-basics";
// import App from "./01-events"i;
// import App from "./ctrl-unctrl";
// import App from "./ctrl-unctrl/index-ctrl";
// import App from "./Vitual-Dom";
import App from "./09-Hooks";

//working with dom
// let h1 = document.createElement("h1");
// h1.setAttribute("id", "heading");
// h1.innerHTML = "welcome to React js ";
// document.getElementById("root").appendChild(h1);

// let count = 1;
// setInterval(() => {
//   let h1 = document.getElementById("heading");
//   h1.innerHTML = "welcome to react js ";
//   console.log("updating heading", count++);
// }, 1000);

ReactDOM.render(<App />, document.getElementById("root"));
