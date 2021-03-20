/*
 *
 * Title: Auth Context
 * Description: context which will manage global state
 * Author: Shah Arafat
 * Date: 19-03-2021
 *
 */

import { createContext, useContext, useEffect, useState } from "react";
import { Loader } from "../components";
import { auth } from "../firebase";

const authContext = createContext();
const { Provider } = authContext;

// this function returns context values
export const useAuth = () => useContext(authContext);

// AuthProvider will wrap whole app
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      // if user is not null get data from local storage
      if (user) {
        let name = localStorage.getItem(user?.email);
        setUserData({ email: user.email, name });
        console.log(currentUser);
      }
    });

    return unsubscribe;
  }, []);

  // google sign up with popup
  let doSocialSignIn = (provider) => {
    return auth.signInWithPopup(provider);
  };

  // this will logout a user
  let doLogout = () => {
    return auth.signOut();
  };

  // this will signup with email and pasword
  let doSignupWithEmailPass = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  // this will login with email and pasword
  let doSigninWithEmailPass = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  // this will reset user password
  let doResetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  // this will remove current user
  let doRemoveUser = () => {
    return currentUser.delete();
  };

  const value = {
    currentUser,
    userData,
    setUserData,
    loading,
    setLoading,
    doSocialSignIn,
    doLogout,
    doSignupWithEmailPass,
    doSigninWithEmailPass,
    doResetPassword,
    doRemoveUser,
  };

  return (
    <Provider value={value}>{loading ? <Loader /> : children}</Provider>
  );
};
