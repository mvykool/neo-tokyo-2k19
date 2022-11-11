import React from 'react'

const MangaFeed = ({manga, data, i}) => {
  return (
    <div key={manga.id} className='manga'>
    <div className="mangaList">
    <img src={manga.thumbnail_url} alt="" />
    </div>
    
    <p className='manga-title' >{manga.title}</p>
    <p className='chapter'>Latest Chapter: <span>{manga.latest_chapter}</span></p>
     </div>
  )
}

export default MangaFeed