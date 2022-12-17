import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import Component3 from "./Components/Component3";
import Component4 from "./Components/Component4";
import Component5 from "./Components/Component5";
import "./styles.css";

export default function App() {
  const employees = [
    {
      id: 1,
      name: "Akshay",
      age: 24,
      address: "Satara",
      email: "akshay07@gmail.com"
    },
    {
      id: 2,
      name: "Amit",
      age: 35,
      address: "Kolhapur",
      email: "amit15@gmail.com"
    },
    {
      id: 3,
      name: "Vikas",
      age: 28,
      address: "Mumbai",
      email: "vikas03@gmail.com"
    },
    {
      id: 4,
      name: "Ganesh",
      age: 25,
      address: "Sangli",
      email: "ganesh96@gmail.com"
    },
    {
      id: 5,
      name: "Harsh",
      age: 26,
      address: "Pune",
      email: "harsh24@gmail.com"
    }
  ];

  return (
    <div className="App">
      <Component1 /> <hr />
      <Component2 name="HARSH" age="25" address="Pune" /> <hr />
      <Component3 data={employees} /> <hr />
      <Component4 /> <hr />
      <Component5 />
    </div>
  );
}
