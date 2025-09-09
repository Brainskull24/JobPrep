import React, { useState, useEffect } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Email and password as of now are: ", email, " ", password);
    setError("");
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and Password are required!");
      return;
    }

    if (email.match(/.+@.+\..+/) === null) {
      setError("Please enter a valid email address.");
      return;
    }

    if (
      password.length < 8 ||
      password.match(/[A-Z]/) === null ||
      password.match(/[a-z]/) === null ||
      password.match(/[0-9]/) === null
    ) {
      setError(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one small letter and 1 number."
      );
      return;
    }

    alert("Form submitted successfully!");

    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Enter your email"
        className="form-fields"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        className="form-fields"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Form;
