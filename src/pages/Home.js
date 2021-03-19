/*
 *
 * Title: Homepage
 * Description: List of services shown here
 * Author: Shah Arafat
 * Date: 19-03-2021
 *
 */

import React from 'react'
import { Navbar, Service } from '../components';
import services from '../fakedata/services';

const Home = () => {
  return (
    <div className="min-h-screen homeBg bg-fixed">
      <Navbar />
      <div className="custom-tw-height p-8 md:px-20 grid grid-cols-1 grid-flow-row justify-center items-center md:grid-cols-2 md:grid-flow-row lg:grid-cols-4 gap-5">
        {
          services.map(service => <Service {...service}  />)
        }
      </div>
    </div>
  )
}

export default Home
