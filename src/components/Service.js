/*
 *
 * Title: Service
 * Description: Homepage service list
 * Author: Shah Arafat
 * Date: 19-03-2021
 *
 */

import React from "react";
import { Link } from "react-router-dom";

const Service = ({ name, img, id }) => {
  return (
    <Link to={`/destination/${id}`}>
      <div className="flex  flex-col justify-center items-center p-8 bg-white rounded-lg shadow-sm">
        <img src={img} alt={name} />
        <h3 className="text-lg text-gray-800 mt-3 font-semibold">{name}</h3>
      </div>
    </Link>
  );
};

export default Service;
