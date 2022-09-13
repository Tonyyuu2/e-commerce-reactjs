import React from "react";

import SignupForm from '../signup/Signup'

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

function Auth() {

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };


  return (
    <div>
      <h1>Login</h1>
      <button onClick={logGoogleUser}>Login with Google</button>
      <SignupForm />
    </div>
  );
}

export default Auth;
