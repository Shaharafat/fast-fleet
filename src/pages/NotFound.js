import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../components'

const NotFound = () => {
  return (
    <Layout isContentCentered={true}>
      <img src="https://i.postimg.cc/BQqth2M5/istockphoto-923505384-612x612.jpg" alt="not found"/>
      <p className="text-2xl font-bolder mt-3">Page Not Found</p>
      <Link to="/" className="text-blue-600 no-underline hover:underline text-md mt-4">Go Home</Link>
    </Layout>
  )
}

export default NotFound
