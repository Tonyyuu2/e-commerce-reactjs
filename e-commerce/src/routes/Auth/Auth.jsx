import React from "react";

import SignupForm from '../signup/Signup'
import SigninForm from "../signin/Signin";

import { AuthenticationContainer } from './auth.styles'

function Auth() {
  
  return (
    <AuthenticationContainer>
      <SigninForm />
      <SignupForm />
    </AuthenticationContainer>
  );
}

export default Auth;

// const logGoogleUser = async () => {
//   const response = await signInWithGooglePopup();
//   const userDocRef = await createUserDocumentFromAuth(response.user);
// };