import React from 'react'
import Latest from './Latest'
import NavBar from './NavBar'
import Popular from './Popular'

const Home = () => {
  return (
    <div>
       <div className='show-case'>  
          <Latest/>
          </div>
        <Popular/>
    </div>
  )
}

export default Home