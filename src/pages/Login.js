/*
 *
 * Title: Login Page
 * Description: login page contains email, social login options
 * Author: Shah Arafat
 * Date: 19-03-2021
 *
 */

import React from "react";
import { Link } from "react-router-dom";
import { Form, Layout, SocialLogin } from "../components";

const Login = () => {
  return (
    <Layout isContentCentered={true}>
      <p className="text-gray-600 font-semibold mt-4">Login to your account</p>

      {/* email login form */}
      <Form />

      <p className="text-md text-gray-500 my-3">or</p>

      {/* social login form */}
      <SocialLogin />

      {/* extra options section */}
      <div className="mt-4 py-2 border-t-2 w-full text-center flex flex-col">
        <span>
          <Link to="/forgotPassword" className="text-blue-500 hover:underline">
            Forgot password?
          </Link>
        </span>
        <span className="inline-block mt-3">
          New User? <Link to="/signup" className="text-blue-500 hover:underline">
            Create an account
          </Link>
        </span>
      </div>
    </Layout>
  );
};

export default Login;
