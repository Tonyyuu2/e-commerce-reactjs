import React, { useEffect } from "react";

// import { getRedirectResult } from "firebase/auth";

import SignupForm from '../signup/Signup'

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/firebase.utils";

function LogIn() {

  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user)
  //   }
  // }, []);


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

export default LogIn;
