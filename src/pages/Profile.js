/*
 *
 * Title: User Profile
 * Description: Show user Information
 * Author: Shah Arafat
 * Date: 20-03-2021
 *
 */

import { faEraser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Layout } from "../components";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { currentUser, doLogout, doRemoveUser, userData } = useAuth();

  const history = useHistory();

  // logout user
  const logoutUser = async () => {
    try {
      await doLogout();
      history.push("/");
    } catch (error) {
      console.error("Error: while signing out...", error.message);
    }
  };

  // remove user
  const removeUser = async (email) => {
    try {
      await doRemoveUser();
      localStorage.removeItem(email);
      history.push("/");
    } catch (error) {
      console.error("Error: while deleting user...", error.message);
    }
  };

  return (
    <Layout isContentCentered={true}>
      {currentUser?.photoURL && (
        <img
          src={currentUser?.photoURL}
          alt="user"
          className="rounded-full border-4 w-32 border-gray-800"
        />
      )}
      <h2 className="text-gray-800 text-xl font-bold mt-3">
        {currentUser?.displayName || userData?.name}
      </h2>
      <h5 className="text-sm text-gray-600">{currentUser?.email}</h5>
      <Button
        icon={faEraser}
        bgColor="bg-red-600"
        handleClick={() => removeUser(currentUser.email)}
      >
        Delete Account
      </Button>

      <div className="mt-4 py-2 border-t-2 w-full text-center">
        <span onClick={logoutUser} className="text-blue-500 hover:underline">
          Logout
        </span>
      </div>
    </Layout>
  );
};

export default Profile;
