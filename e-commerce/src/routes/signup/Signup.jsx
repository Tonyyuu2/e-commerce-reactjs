import React, { useState } from 'react'

// const defaultFormFields = {
//   displayName: '',
//   email: '',
//   password: '',
//   confirmPassword: ''
// }

function Signup() {

  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    const { name } = e;
  }


  return (
    <div>
      <h1>Use what you got...</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" name='displayName' required/>

        <label>Email</label>
        <input type="email" name='email' required/>

        <label>Password</label>
        <input type="password" name='password' required/>

        <label>Confirm Password</label>
        <input type="password" name='confirmPassword'required/>

        <button type='submit'>Sign Up</button>
      </form>

    </div>
  )
}

export default Signup