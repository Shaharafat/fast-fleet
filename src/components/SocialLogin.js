/*
 *
 * Title: Social Login
 * Description: Social Login Options
 * Author: Shah Arafat
 * Date: 20-03-2021
 *
 */
import React from "react";
import {
  faFacebookF,
  faGithub,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "../components";
import { useAuth } from "../context/AuthContext";
import {
  facebookProvider,
  githubProvider,
  googleProvider,
} from "../firebase";

const SocialLogin = () => {
  const { doSocialSignIn } = useAuth();

  const history = useHistory();
  const location =useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const signInWithSocialAccount = async (provider) => {
    try {
      await doSocialSignIn(provider);
      history.replace(from);
    } catch (error) {
      console.error("error while signing up with google", error.message);
    }
  };

  return (
    <div>
      <Button
        handleClick={() => signInWithSocialAccount(googleProvider)}
        icon={faGoogle}
        bgColor="bg-red-500 hover:bg-red-600"
      >
        Continue with Google
      </Button>

      <Button
        handleClick={() => signInWithSocialAccount(githubProvider)}
        icon={faGithub}
        bgColor="bg-gray-800 hover:bg-gray-900"
      >
        Continue with Github
      </Button>

      <Button
        handleClick={() => signInWithSocialAccount(facebookProvider)}
        icon={faFacebookF}
        bgColor="bg-blue-800 hover:bg-blue-900"
      >
        Continue with Facebook
      </Button>

    </div>
  );
};

export default SocialLogin;