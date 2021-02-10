import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./signup.css";
import { useHistory, Link } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import { auth } from "./firebase";
function SignUp() {
  const history = useHistory();
  const [profileImage, setProfileImage] = useState("");
  const [profileDisplayName, setProfileDisplayName] = useState("");
  const [profileEmail, setProfileEmail] = useState("");
  const [profilePassword, setProfilePassword] = useState("");
  const [profileConfirmPassword, setProfileConfirmPassword] = useState("");

  const disabled =
    profileEmail === "" ||
    profilePassword === "" ||
    profileConfirmPassword === "" ||
    profilePassword !== profileConfirmPassword ||
    profileImage === ""
      ? true
      : false;

  const addUser = async (e) => {
    e.preventDefault();
    await auth
      .createUserWithEmailAndPassword(profileEmail, profilePassword)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: profileDisplayName,
            photoURL: profileImage,
          })
          .then((user) => {
            console.log("user created ", user);
            history.push("/home");
          })
          .catch((e) => console.log("Error in created user ", e));
      });
    setProfileConfirmPassword("");
    setProfileDisplayName("");
    setProfilePassword("");
    setProfileImage("");
    setProfileEmail("");
  };

  return (
    <div data-testid="signup" className="signIn">
      <form className="signIn_details animate__animated animate__slideInLeft">
        <TwitterIcon
          fontSize="large"
          className="signIn_icon  animate__animated    animate__slideInDown"
        />
        <h3>Create Your Account</h3>
        <div className="signIn_input">
          <Avatar className="signIn_avatar" />
          <input
            value={profileImage}
            onChange={e => setProfileImage(e.target.value)}
            type="text"
            placeholder="Enter Image https URL"
          />
          <input
            value={profileDisplayName}
            onChange={(e) => setProfileDisplayName(e.target.value)}
            placeholder="Enter Name"
            type="text"
          />
          <input
            value={profileEmail}
            onChange={(e) => setProfileEmail(e.target.value)}
            placeholder="Enter Email"
            type="email"
          />
          <small className="signIn_password">
            Password must have at least <b>6</b> character.
          </small>
          <input
            value={profilePassword}
            onChange={(e) => setProfilePassword(e.target.value)}
            placeholder="Enter password"
            type="password"
          />
          <input
            value={profileConfirmPassword}
            onChange={(e) => setProfileConfirmPassword(e.target.value)}
            placeholder="Enter Confirm password"
            type="password"
          />
          <Button
            onClick={addUser}
            disabled={disabled}
            className="signIn_button"
          >
            Sign Up
          </Button>
        </div>
        <h4 className="signIn_link">
          Already have an account<Link to="/">Sign In</Link>{" "}
        </h4>
      </form>
    </div>
  );
}

export default SignUp;
