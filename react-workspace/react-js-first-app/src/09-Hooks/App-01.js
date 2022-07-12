import { useState } from "react";

function App() {
  //   const result = useState("kumar");
  //   console.log(result);
  const [name, setName] = useState("kumar");
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <h1>This is Inside function :{name}</h1>
      <h2>Count value : {count}</h2>
      <br />
      checked status :{checked ? "checked" : "unchecked"}
      <input
        type="checkbox"
        value={checked}
        onChange={() => {
          setChecked((checked) => !checked);
        }}
      />
      <button
        onClick={() => {
          setName("ranjan");
        }}
      >
        change
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
