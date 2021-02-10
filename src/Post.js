import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import "./post.css";
const Post = forwardRef(
  ({ avatar, name, username, verified, text, image, timestamp }, ref) => {
    return (
      <div data-testid='post' ref={ref} className="post">
        <div className="post_avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post_body">
          <div className="post_header">
            <div className="post_headerText">
              <h3>
                {name}
                <span className="post_userName">
                  {verified && <VerifiedUserIcon className="post_badge" />}@
                  {username?.toLowerCase()}{" "}
                  <small>
                    {timestamp && new Date(timestamp?.toDate()).toUTCString()}
                  </small>
                </span>
              </h3>
            </div>
            <div className="post_headerDescription">
            <div>  <p>{text}</p></div>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post_footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
