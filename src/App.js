/*
 *
 * Title: App Root File
 * Description: This file contains all routes and context provider
 * Author: Shah Arafat
 * Date: 19-03-2021
 *
 */

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { About, Contact, Destination, ForgotPassword, Home, Login, Signup } from "./pages";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <PrivateRoute path="/destination" component={Destination} />
          <Route path="/login" component={Login} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
