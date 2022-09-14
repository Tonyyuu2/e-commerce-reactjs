import React from "react";

import SignupForm from '../signup/Signup'
import SigninForm from "../signin/Signin";

function Auth() {
  
  return (
    <div>
      <h1>Login</h1>
      <SigninForm />
      <SignupForm />
    </div>
  );
}

export default Auth;

// const logGoogleUser = async () => {
//   const response = await signInWithGooglePopup();
//   const userDocRef = await createUserDocumentFromAuth(response.user);
// };