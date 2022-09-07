import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase.utils";

function LogIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={logGoogleUser}>Login with Google</button>
    </div>
  );
}

export default LogIn;
