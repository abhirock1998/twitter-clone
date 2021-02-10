import { Button, Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./tweetbox.css";
import db from "./firebase";
import firebase from "firebase";
function Tweetbox({user}) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const randomString = () => {
    var randChara =
      "abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var result = "";
    for (var i = 0; i < 20; i++) {
      result += randChara[Math.floor(Math.random() * randChara.length)];
    }

    return result;
  };
  const disabled = tweetMessage === "" ? true : false;
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      avatar: user?.photoURL,
      username: user?.displayName,
      name: user?.displayName,
      text: tweetMessage,
      image: tweetImage,
      verified: user?.verified,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      key: randomString(),
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div data-testid='tweetBox' className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src={user?.photoURL} />
          <input
            value={tweetMessage}
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
          />
        </div>
        <input
          value={tweetImage}
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
        />
        <Button
          disabled={disabled}
          onClick={sendTweet}
          className="tweetBox_button"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
