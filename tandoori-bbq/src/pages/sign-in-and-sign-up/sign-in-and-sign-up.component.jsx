import React from "react";
import SignIn from "../../component/sign-in/sign-in.component";
import SignUp from "../../component/sign-up/sign-up.component";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <div className="sign-in">
      <SignIn />
    </div>
    <div className="sign-up">
      <SignUp />
    </div>
  </div>
);

export default SignInAndSignUpPage;