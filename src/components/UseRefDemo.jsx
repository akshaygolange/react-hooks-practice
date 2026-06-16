import React, { useRef, useEffect, useState } from "react";

const UseRefDemo = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter here.. "
        style={{ fontSize: "17px", padding: "5px " }}
      />

      <button onClick={handleClick}>Hit me</button>
    </div>
  );
};

export const DropDown = () => {
  const [isOpen, setOpen] = useState(false);

  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setOpen((prev) => !prev)}>Toggle Dropdown</button>

      {isOpen && (
        <div ref={dropDownRef} style={{ border: "1px solid yellow" }}>
          <ul>
            <li>home</li>
            <li>about</li>
            <li>skills</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UseRefDemo;
