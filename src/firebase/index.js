/*
 *
 * Title: Firebase setup
 * Description: Firebase config, initialization and auth provider
 * Author: Shah Arafat
 * Date: 19-03-2021
 *
 */

import firebase from "firebase/app";
import "firebase/auth";

let firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Auth
export const auth = firebase.auth();

//* google auth provier. It will pass 
// as parameter to sign up with google
export const googleProvider = new firebase.auth.GoogleAuthProvider();

//* facebook auth provider. It will pass 
// as parameter to sign up with google
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

//* github auth provider. It will pass 
// as parameter to sign up with google
export const githubProvider = new firebase.auth.GithubAuthProvider();
