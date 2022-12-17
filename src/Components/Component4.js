// State
import React, { useState } from "react";

function Component4() {
  const [name, setName] = useState("HARSH");
  const [count, setCount] = useState(0);
  const [fontColor, setFontColor] = useState("yellowgreen");
  const [bg, setBg] = useState("black");

  function fullName() {
    setName("HARSHWARDHAN PAWAR");
  }

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    // Ternary Operator Condition must be inside setState (NOTE)
    // count === 0 ? count : setCount(count - 1);
    setCount(count === 0 ? count : count - 1);
  }

  function fontColorSet() {
    setFontColor("red");
  }

  function gold() {
    setBg("gold");
  }

  function toggle() {
    // const switchColor = bg === "black" ? "gold" : "black";
    // setBg(switchColor);

    setBg(bg !== "black" ? "black" : "gold");
  }

  return (
    <div style={{ marginBottom: "30px" }}>
      <h1>COMPONENT 4</h1>
      <h1>CHANGE TEXT</h1>
      <h2>{name}</h2>
      <button onClick={fullName}> Full Name </button>
      <hr />
      <h1>COUNTER</h1>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>
      <hr />
      <h1 style={{ color: fontColor }}>FIFA WORLDCUP : 2022 </h1>
      <button onClick={fontColorSet}>Click</button>
      <hr />
      <div
        style={{
          margin: "auto",
          border: "4px solid black",
          padding: "50px",
          width: "70%",
          borderRadius: "15px",
          backgroundColor: bg
        }}
      >
        <button onClick={gold}>GOLD</button>
        <br />
        <br />
        <button onClick={toggle}>TOGGLE</button>
      </div>
    </div>
  );
}

export default Component4;
