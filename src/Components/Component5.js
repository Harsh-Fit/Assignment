import React, { useState } from "react";

function Component5() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val) {
    // console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }

  function printData() {
    setPrint(true);
  }

  return (
    <div style={{ marginBottom: "30px" }}>
      <h1> COMPONENT 5 </h1>
      <h1>Get Input Box Value</h1>
      {print ? <h1 style={{ color: "red" }}>{data}</h1> : null}
      <input
        type="text"
        placeholder="Enter Something"
        onChange={getData}
      />{" "}
      <button onClick={printData}> Print Data </button>
    </div>
  );
}

export default Component5;
