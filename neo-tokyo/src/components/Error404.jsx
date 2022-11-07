import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='error'>
      <h2>Page not found</h2>
      <p>Error 404</p>
      <p>Go back to <Link to="/"> <span>Home page</span> </Link></p>
    </div>
  )
}

export default Error404