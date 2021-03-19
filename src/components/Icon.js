import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Icon = ({ iconName, iconStyles }) => {
  return <FontAwesomeIcon icon={iconName} className={`${iconStyles}`} />;
};

export default Icon;
