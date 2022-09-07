import React from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils";

function LogIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    createUserDocumentFromAuth(response.user);
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={logGoogleUser}>Login with Google</button>
    </div>
  );
}

export default LogIn;
