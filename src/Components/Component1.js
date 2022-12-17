// STYLE CSS

import React from "react";
import "../newStyle.css";
import style from "../customStyle.module.css";

const internalStyle = {
  backgroundColor: "yellowgreen",
  padding: "10px",
  color: "green"
};

function Component1() {
  return (
    <>
      <h1> COMPONENT 1 </h1>
      <h1 style={{ color: "white", backgroundColor: "black" }}>HARSHWARDHAN</h1>
      <h2 className="primary"> BRAINWORKS </h2>
      <h3 className={style.success}> MERN STACK </h3>
      <h4 style={internalStyle}> Location : Pune </h4>
    </>
  );
}

export default Component1;
