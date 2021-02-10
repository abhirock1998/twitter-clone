import React from "react";
import { Redirect, Route } from "react-router-dom";

export function IsUserRedirect({
  user,
  loggedInPath,
  path,
  children,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={() => {
        if (user === null || user === undefined) {
          console.log("USER REDIRECT TO SIGNIN PAGE", loggedInPath, user);
          return children;
        }

        if (user !== null && user !== undefined) {
          console.log("USER REDIRECT TO HOME PAGE ", loggedInPath, user);
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (user !== null && user !== undefined) {
          console.log("USER REDIRECT TO HOME PAGE", loggedInPath, user);
          return children;
        }
        if (user === null ||user === undefined) {
          console.log("USER REDIRECT TO SIGNIN PAGE", loggedInPath, user);
          return (
            <Redirect
              to={{
                pathname: loggedInPath
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}
