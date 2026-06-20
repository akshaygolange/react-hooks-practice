import React, { useState, useContext } from "react";
import Login from "./components/Login";
import ToggleText, { Count } from "./components/ToggleText";
import SelectCity from "./components/SelectCity";
import UseEffectDemo from "./components/UseEffectDemo";
import UseRefDemo, { DropDown } from "./components/UseRefDemo";
import ThemeContext from "./context/ThemeContext";
import UseMemoDemo  from "./components/UseMemoDemo";
import UseCallbackDemo from "./components/UseCallbackDemo";
import UseFetchHookDemo from "./components/use-fetch/UseFetchHookDemo";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // console.log(theme, "<-theme");

  return (
    <div className="App" >
      {/* <h1>useState-Hook</h1>
      <ToggleText />
      <Count />
      <Login />

      <SelectCity/> */}
      {/* <UseEffectDemo/> */}
      {/* <UseRefDemo/> 
      <DropDown/> */}
      {/* <h2>
        {theme === "light"
          ? "☀️ Good Morning, User!"
          : "🌙 Burning the Midnight Oil?"}
      </h2>{" "}
      <button onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button> */}


      {/* <UseMemoDemo/> */}
      {/* <UseCallbackDemo/> */}

      <UseFetchHookDemo/>

    </div>
  );
};

export default App;
