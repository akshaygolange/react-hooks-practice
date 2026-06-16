import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputOfEmail = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handleInputOfPassword = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with: ", { email, password });
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Email:</label>
      <input
        type="text"
        placeholder="Enter Your Email "
        value={email}
        onChange={handleInputOfEmail}
      />
      <label htmlFor="">Password:</label>
      <input
        type="password"
        placeholder="Enter Your Password"
        value={password}
        onChange={handleInputOfPassword}
      />

      <button type="submit" onSubmit={handleSubmit}>
        Login
      </button>
    </form>
  );
};

export default Login;
