import React from 'react'
import { useGetLatestQuery } from '../redux/apiCore'

const LatestPage = () => {
  const {data, isFetching, error } = useGetLatestQuery();

  if (isFetching) return "Loading songs...";

  if (error) return "Error";

  console.log(data);
  return (
    <>
    <div className='mangaContainer'>
      <h3 className='popularContainer-title'>Latest mangas</h3>
    {data?.data?.map((manga, i)=> (
      <div key={manga.id} className='manga'>
        <div className="mangaList">
        <img src={manga.thumbnail_url} alt="" />
        </div>
        
        <p className='manga-title' >{manga.title}</p>
        <p className='chapter'>Latest Chapter: <span>{manga.latest_chapter}</span></p>
         </div>
         
    ))}
     <small className='no-more-results'>No more results</small>
    </div>
    </>
  )
}

export default LatestPage