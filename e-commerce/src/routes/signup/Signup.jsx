import React, { useState } from "react";
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import FormInput from "../../input-form/FormInput";

function Signup() {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName } = state;

  const resetState = () => {
    setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (state.password !== state.confirmPassword) {
      alert("re-enter email or password");
      return;
    }
    try {
      const response = await createAuthUserWithEmailandPassword(
        state.email,
        state.password
      );

      await createUserDocumentFromAuth(response.user, { displayName });
      resetState();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use");
      } else {
        console.log("error message: ", error.message);
      }
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
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          onChange={handleChange}
          value={state.displayName}
          required
        />

        <FormInput
          label="email"
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="password"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          required
        />

        <FormInput
          label="confirmPassword"
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
