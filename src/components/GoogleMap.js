/*
 *
 * Title: Google Map
 * Description: Google map with pegion maps
 * Author: Shah Arafat
 * Date: 20-03-2021
 *
 */

import {Map, Marker } from "pigeon-maps";
import React from "react";

const GoogleMap = () => {
  return (
    <Map height={450} defaultCenter={[22.3313902, 91.8199913]} defaultZoom={11}>
      <Marker width={50} anchor={[22.3313902, 91.8199913]} />
    </Map>
  );
};

export default GoogleMap;
