/*
 *
 * Title: Navigation Bar
 * Description: Responsive Navigation Bar
 * Author: Shah Arafat
 * Date: 19-03-2021
 *
 */

import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from ".";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, userData } = useAuth();
  console.log(currentUser);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  // This will toggle the movile nav
  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  return (
    <nav className="navSectionStyles bg-blue-500 md:bg-transparent text-gray-800">
      <h1 className="text-xl font-bold">
        <Link to="/">Fast Fleet</Link>
      </h1>
      <ul
        className={`navbarUlStyles ${
          isMobileNavActive
            ? "-translate-x-0"
            : "-translate-x-full md:translate-x-0"
        } bg-blue-500 md:bg-transparent text-gray-800 `}
      >
        <li className="md:mx-2">
          <Link to="/" className="navLinkStyles text-gray-800">
            Home
          </Link>
        </li>
        <li className="md:mx-2">
          <Link to="/destination/1" className="navLinkStyles text-gray-800">
            Destination
          </Link>
        </li>
        <li className="md:mx-2">
          <Link to="/blog" className="navLinkStyles text-gray-800">
            Blog
          </Link>
        </li>
        <li className="md:mx-2">
          <Link to="/contact" className="navLinkStyles text-gray-800">
            Contact
          </Link>
        </li>
        {/* is user is logged in show user name otherwise show login button */}
        <li className="md:ml-2">
          {currentUser ? (
            <Link to="/profile" className="navLinkStyles text-gray-800">
              <Icon iconName={faUser} iconStyles='mr-2' />
              {currentUser.displayName || userData.name }
            </Link>
          ) : (
            <Link to="/login" className="text-white">
              <button className="bg-red-500 text-md rounded-md px-4 py-1" >Login</button>
            </Link>
          )}
        </li>
      </ul>
      {/* hamburger icon for mobile nav */}
      <div
        className="block md:hidden ml-auto text-xl"
        onClick={toggleMobileNav}
      >
        {isMobileNavActive ? (
          <Icon iconName={faTimes} />
        ) : (
          <Icon iconName={faBars} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
