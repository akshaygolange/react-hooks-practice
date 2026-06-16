import React, { useState } from "react";

const ToggleText = () => {
  const [toggleText, setToggleText] = useState(true);

  console.log("toggleText ->", toggleText);

  const handleToggleText = () => {
    setToggleText(prev =>!prev);
  };
  return (
    <div>
      {toggleText ? <h1>Hey,comin.. from react</h1> : null}

      <button onClick={handleToggleText}>Toggle</button>
    </div>
  );
};

export const Count = () => {
  const [count, setCount] = useState(0);

  console.log("Count ->", count);

  const handleCount = () => {
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);

    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  return (
    <div>
      <h2>count : {count}</h2>{" "}
      <button onClick={handleCount}>Change count</button>
    </div>
  );
};

export default ToggleText;
