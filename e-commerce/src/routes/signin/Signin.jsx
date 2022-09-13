import React, { useState } from "react";
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import FormInput from "../../components/form-input/FormInput";
import Button from "../../components/button/Button";

import "./signin.styles.scss";

function Signin() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const resetState = () => {
    setState({
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    }
    try {
      resetState();
    } catch (error) {
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Please tell me more...</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          inputOptions={{
            type: "email",
            name: "email",
            value: state.email,
            onChange: handleChange,
            required: true,
          }}
        />

        <FormInput
          label="password"
          inputOptions={{
            type: "password",
            name: "password",
            value: state.password,
            onChange: handleChange,
            required: true,
          }}
        />
        <Button 
          children={"SIGN UP"} 
          type="submit" 
        />
      </form>
    </div>
  );
}


export default Signin;
