// Props

import React from "react";

function Component2(props) {
  // console.log(props);
  return (
    <div>
      <h1> COMPONENT 2 </h1>
      <h1> NAME : {props.name}</h1>
      <h3> AGE : {props.age} </h3>
      <h3> ADDRESS : {props.address} </h3>
    </div>
  );
}

export default Component2;
