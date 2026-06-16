import React, { useState } from "react";
import Login from "./components/Login";
import ToggleText, { Count } from "./components/ToggleText";
import SelectCity from "./components/SelectCity";
import UseEffectDemo from "./components/UseEffectDemo";



const App = () => {
  return (
    <div className="App">
      {/* <h1>useState-Hook</h1>
      <ToggleText />
      <Count />
      <Login />

      <SelectCity/> */}
      <UseEffectDemo/>
    </div>
  );
};

export default App;
