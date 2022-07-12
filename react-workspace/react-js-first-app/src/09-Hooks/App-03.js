// useEffect is side car which does work like logging, fetching etc ...
import React, { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState("ranjan");
  const [developer, setDeveloper] = useState(false);

  //when there is useEffect , which does not take any parameter
  // it will be called for any useState, or any loads
  useEffect(() => {
    console.log(`this page has ${name} content`);
  });
  return (
    <div>
      <h3>Hello mr {name}</h3>
      <h3>is he developer: {developer ? "Yes" : "no"}</h3>
      <button
        onClick={() => {
          setName("Ranjan Kumar ");
        }}
      >
        Get full name
      </button>
      <button
        onClick={() => {
          setDeveloper(true);
        }}
      >
        Is Developer
      </button>
    </div>
  );
};

export default App;
