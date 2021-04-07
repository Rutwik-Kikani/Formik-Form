import React from "react";
import sideImage from "../../assets/images/signup/signup2.png";
import SignUpForm from "./SignUpForm";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div className="container-fluid w-100 horizontal-vertical-center">
      <div className="row">
        <div className="col-sm-5">
          <SignUpForm />
        </div>

        <div className="col-sm-7 my-5">
          <img
            className="img-fl uid w-100"
            src={sideImage}
            alt="clipArt for sign up"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
