/*
 *
 * Title: Homepage
 * Description: List of services shown here
 * Author: Shah Arafat
 * Date: 19-03-2021
 *
 */

import React from "react";
import { Layout, Service } from "../components";
import services from "../fakedata/services";

const Home = () => {
  return (
    <Layout layoutClasses="grid grid-cols-1 grid-flow-row justify-center items-center md:grid-cols-2 md:grid-flow-row lg:grid-cols-4 gap-5">
      {services.map((service) => (
        <Service {...service} />
      ))}
    </Layout>
  );
};

export default Home;
