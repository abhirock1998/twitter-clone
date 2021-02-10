import React, { useState } from "react";
import "./signin.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from "@material-ui/core";
import { auth } from "./firebase";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "./features/userSlice";
function SignIn() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const disabled = userEmail === "" || userPassword === "" ? true : false;
  const handleUser = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then((response) => {
        dispatch(
          logIn({
            displayName: response.user.displayName,
            photoURL: response.user.photoURL,
            email: response.user.email,
            verified: response.user.emailVerified,
            phone: response.user.phoneNumber,
          })
        );
        setuserPassword("");
        setuserEmail("");
        history.push("/home");
      })
      .catch((e) => {
        alert("Error in sign in");
        console.log("ERROR IN SIGN IN==>>", e);
      });
  };

  return (
    <div className="signUp ">
      <div className="signUp_details animate__animated animate__slideInLeft">
        <TwitterIcon fontSize="large" className="signUp_icon animate__animated    animate__slideInDown" />
        <h3>Sign In</h3>
        <div className="signUp_input">
          <input
            value={userEmail}
            onChange={(e) => setuserEmail(e.target.value)}
            placeholder="Enter email"
            type="email"
          />
          <input
            value={userPassword}
            onChange={(e) => setuserPassword(e.target.value)}
            placeholder="Enter password"
            type="password"
          />
          <Button
            disabled={disabled}
            onClick={handleUser}
            className="signUp_button"
          >
            Sign In
          </Button>
        </div>
        <h4 className="signUp_link">
          Don't have account?<Link to="/signup">Sign up</Link>{" "}
        </h4>
      </div>
    </div>
  );
}

export default SignIn;
