import React, { useState } from "react";
import { createAuthUserWithEmailandPassword } from "../../utils/firebase.utils";

function Signup() {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (state.password !== state.confirmPassword) {
      alert("re-enter email or password");
      return;
    }
    try {
      const response = await createAuthUserWithEmailandPassword(state.email, state.password)

      
    }
    catch (error) {
      console.log('error message: ', error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <h1>Use what you got...</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          name="displayName"
          onChange={handleChange}
          value={state.displayName}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
