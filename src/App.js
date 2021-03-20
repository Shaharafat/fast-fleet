/*
 *
 * Title: App Root File
 * Description: This file contains all routes and context provider
 * Author: Shah Arafat
 * Date: 19-03-2021
 *
 */

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Loader } from "./components";
import { AuthProvider } from "./context/AuthContext";
import {Blog, Contact, Destination, ForgotPassword, Home, Login, Profile, Signup, NotFound } from "./pages";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <PrivateRoute path="/destination/:id" component={Destination} />
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
