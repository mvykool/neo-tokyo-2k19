import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetDetailsQuery } from '../redux/apiCore'

const Details = () => {

   
    const { data, isFetching, error } = useGetDetailsQuery("manga-wl973694");


  console.log(data?.data)

  return (
    <div className='details'>
      <h1>{data.data.title}</h1>
      <p></p>
    </div>
  )
}

export default Details