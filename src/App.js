import React, { useEffect, useState } from "react";
import "./App.css";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import SignUp from "./SignUp";
import Widget from "./Widget";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import { IsUserRedirect, ProtectedRoute } from "./routes";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const [_user, setUser] = useState(null);
  useEffect(() => {
   setUser(user);
   
  }, [user]);
  
  return (
    <Router>
      <Switch>
        <ProtectedRoute loggedInPath={"/"} user={_user} path={"/home"}>
          <div className="app">
            <Sidebar />
            <Feed user={user} />
            <Widget />
          </div>
        </ProtectedRoute>
        <IsUserRedirect path={"/signup"} loggedInPath={"/home"} user={_user}>
          <SignUp />
        </IsUserRedirect>
        <IsUserRedirect path={"/"} loggedInPath={"/home"} user={_user}>
          <SignIn />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
