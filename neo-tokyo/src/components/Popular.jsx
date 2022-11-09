import React from 'react'
import { Link } from 'react-router-dom';
import { useGetPopularQuery } from '../redux/apiCore'
import Genres from '../pages/Genres';

const Popular = () => {
  const {data, isFetching, error } = useGetPopularQuery();

  if (isFetching) return "Loading songs...";

  if (error) return "Error";

  console.log(data);
  return (
    <>
    <div className='mangaContainer'>
      <Genres/>
      <h3 className='mangaContainer-title'>Discover</h3>
    {data?.data?.slice(0,9).map((manga, i)=> (
      <div key={manga.id} className='manga'>
        <div className="mangaList">
        <img src={manga.thumbnail_url} alt="" />
        </div>
        
        <p className='manga-title' >{manga.title}</p>
        <p className='chapter'>Latest Chapter: <span>{manga.latest_chapter}</span></p>
         </div>
         
    ))}
      <Link className='link' to="/popular">See more</Link>
    </div>
    </>
  )
}

export default Popular