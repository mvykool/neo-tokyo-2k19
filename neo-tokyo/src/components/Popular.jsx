import React from 'react'
import { useGetPopularQuery } from '../redux/apiCore'

const Popular = () => {
  const {data, isFetching, error } = useGetPopularQuery();

  if (isFetching) return "Loading songs...";

  if (error) return "Error";

  console.log(data);
  return (
    <>
    <div className='mangaContainer'>
      <h3 className='mangaContainer-title'>Popular Mangas</h3>
    {data?.data?.slice(0,5).map((manga, i)=> (
      <div key={manga.id} className='manga'>
        <div className="mangaList">
        <img src={manga.thumbnail_url} alt="" />
        </div>
         <p className='manga-title' >{manga.title}</p>
         </div>
    ))}
    </div>
     <a className='link' href="#">See more</a>
    </>
  )
}

export default Popular