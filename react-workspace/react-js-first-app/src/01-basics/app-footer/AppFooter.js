import React from "react";

function AppFooter(props) {
  return (
    <div>
      <hr />
      <p className="app-footer">
        This is my footer, copyright reserved 2022 {props.year} ,{props.company}
        , {props.website}
      </p>
    </div>
  );
}

export default AppFooter;
