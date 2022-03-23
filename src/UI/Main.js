import React from "react";
import "../stylesheets/Main.css";

const Main = (props) => {
  return <div className="main">{props.children}</div>;
};

export default Main;
