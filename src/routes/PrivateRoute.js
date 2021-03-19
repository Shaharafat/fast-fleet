/*
 *
 * Title: Private Route
 * Description: Private routes will redirected to login page
 * Author: Shah Arafat
 * Date: 19-03-2021
 *
 */

import React from "react";
import { Redirect, Route } from "react-router";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} /> // state preserves coming location
        )
      }
    />
  );
};

export default PrivateRoute;
