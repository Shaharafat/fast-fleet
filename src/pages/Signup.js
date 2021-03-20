/*
 *
 * Title: Sign up
 * Description: Signup page to register
 * Author: Shah Arafat
 * Date: 20-03-2021
 *
 */

import React from "react";
import { Link } from "react-router-dom";
import { Form, Layout, SocialLogin } from "../components";

const Signup = () => {

  return (
    <Layout isContentCentered={true}>
      <div className="content-container">
        <p className="text-gray-600 font-semibold mt-4">Sign up for your account</p>
        <Form isSignupPage={true} />
        <p className="text-md text-gray-500 my-3">or</p>
        <SocialLogin />
        <div className="mt-4 py-2 border-t-2 w-full text-center">
          <span>Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></span>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;