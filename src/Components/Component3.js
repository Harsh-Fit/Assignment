// Props ( Handle Array )

import React from "react";

function Component3(props) {
  const employees = props.data;

  return (
    <div style={{ marginBottom: "40px" }}>
      <h1>Component 3</h1>
      <table border="1" style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
            <td>Address</td>
            <td>Email Id</td>
          </tr>
          {employees.map((info, i) => (
            <tr key={i}>
              <td>{info.id}</td>
              <td>{info.name}</td>
              <td>{info.age}</td>
              <td>{info.address}</td>
              <td>{info.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Component3;
