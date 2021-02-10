import React, { useEffect, useState } from "react";
import "./feed.css";
import Post from "./Post";
import Tweetbox from "./Tweetbox";
import db from "./firebase";
import FlipMove from "react-flip-move";
function Feed({user}) {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshots) => {
        setPost(snapshots.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div data-testid='feed' className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <Tweetbox user={user} />
      <FlipMove>
        {posts?.map((post) => {
          return (
            <Post
              key={post?.key}
              avatar={post.avatar}
              username={post.username}
              name={post.name}
              text={post.text}
              image={post.image}
              verified={true}
              timestamp={post.timestamp}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Feed;
