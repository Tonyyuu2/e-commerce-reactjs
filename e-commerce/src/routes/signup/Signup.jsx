import React, { useState } from "react";

// const defaultFormFields = {
//   displayName: '',
//   email: '',
//   password: '',
//   confirmPassword: ''
// }

function Signup() {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log('state :', state);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState({...state, [name]: value})
  };

  return (
    <div>
      <h1>Use what you got...</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" name="displayName" onChange={handleChange} value={state.displayName} required />

        <label>Email</label>
        <input type="email" name="email" value={state.email} onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" value={state.password} onChange={handleChange} required />

        <label>Confirm Password</label>
        <input type="password" name="confirmPassword"   value={state.confirmPassword} onChange={handleChange} required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
