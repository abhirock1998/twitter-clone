// eslint-disable-next-line
import React, { useState } from "react";
import "./sidebar.css";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import TwitterIcon from "@material-ui/icons/Twitter";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Sidebaroption from "./Sidebaroption";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Button } from "@material-ui/core";
import { auth } from "./firebase";
import { logOut } from "./features/userSlice";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
function Sidebar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const signOut = (e) => {
    e.preventDefault();
    dispatch(
      logOut({
        user: null,
      })
    );
    auth.signOut();
    history.push("/");
  };
  return (
    <div data-testid='sidebar' className="sidebar">
      <TwitterIcon className="sidebar_twitterIcon  animate__animated    animate__slideInDown" />
      <Sidebaroption active Icon={HomeIcon} title="Home" />
      <Sidebaroption Icon={SearchIcon} title={"Explore"} />
      <Sidebaroption Icon={NotificationsNoneIcon} title={"Notification"} />
      <Sidebaroption Icon={MailOutlineIcon} title={"Messages"} />
      <Sidebaroption Icon={BookmarkBorderIcon} title={"Bookmarks"} />
      <Sidebaroption Icon={ListAltIcon} title={"Lists"} />
      <Sidebaroption Icon={PermIdentityIcon} title={"Profile"} />
      {show && (
        <div className="sidebar_popup">
          <h3 onClick={signOut}>
            <ExitToAppIcon fontSize="large" />
          </h3>
        </div>
      )}
      <Sidebaroption
        onClick={() => setShow(!show)}
        Icon={MoreHorizIcon}
        title={"More"}
      />
      <Button fullWidth className="sidebarOption_tweet" variant="outlined">
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
