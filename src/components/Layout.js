/*
 *
 * Title: Layout
 * Description: Default site layout
 * Author: Shah Arafat
 * Date: 20-03-2021
 *
 */
import React from "react";
import { Navbar } from ".";

const Layout = ({ children, layoutClasses, isContentCentered }) => {
  return (
    <div className="min-h-screen homeBg bg-fixed">
      <Navbar />
      <div className={`custom-tw-height p-4 sm:px-8 md:px-20 lg:px-32 xl:px-40 ${isContentCentered && 'flex justify-center items-center'}  ${layoutClasses}`}>
        {isContentCentered ? 
          <div className="content-container bg-white">{children}</div>
        : children}
      </div>
    </div>
  );
};

export default Layout;
