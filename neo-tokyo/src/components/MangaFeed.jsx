import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';

const MangaFeed = ({manga, data, i}) => {

/**navigate */

const navigate = useNavigate();

const [id, setId] = useState("")


/**click to go to details */

const handleClick = (e, id) => {
  e.preventDefault();
  navigate(`/details/manga-wl973694`);
}


  return (
    <div key={manga.id} className='manga' onClick={handleClick && setId(e.target.id)} >
    <div className="mangaList">
    <img src={manga.thumbnail_url}  alt="" />
    </div>
    
    <p className='manga-title' >{manga.title}</p>
    <p className='chapter'>Latest Chapter: <span>{manga.latest_chapter}</span></p>
     </div>
  )
}

export default MangaFeed