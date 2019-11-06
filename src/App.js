import React, { useState } from "react";
import Login from "./User/Login";
import Logout from "./User/Logout";
import Register from "./User/Register";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  function handleChange(evt) {
    setName(evt.target.value);
  }
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <input type="text" onChange={handleChange} value={name} />
      <Login></Login>
      <Logout></Logout>
      <Register></Register>
    </div>
  );
}

export default App;
