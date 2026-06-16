import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() =>{

    document.documentElement.setAttribute("data-theme" ,theme)
  } ,[theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
