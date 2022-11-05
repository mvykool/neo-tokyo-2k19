import React from 'react'
import { useGetPopularQuery } from '../redux/apiCore'

const Popular = () => {
  const {data, isFetching, error } = useGetPopularQuery();

  if (isFetching) return "Loading songs...";

  if (error) return "Error";

  console.log(data);
  return (
    <div className='mangaContainer'>
    {data?.data?.slice(0,5).map((manga, i)=> (
        <div key={manga.id} className="mangaList">
        <p>{manga.title}</p>
        <img src={manga.thumbnail_url} alt="" />
        </div>
    ))}
    </div>
  )
}

export default Popular