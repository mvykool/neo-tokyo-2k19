import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';

const MangaFeed = ({manga, data, i}) => {

/**navigate */

const navigate = useNavigate();

const [id, setId] = useState("")


/**click to go to details */

const handleClick = (id) => {
 
  console.log(id)
  setId(id)
  navigate(`/details/${id}`)
}


  return (
    <div key={manga.id} className='manga' onClick={() => handleClick(manga.id)} >
    <div className="mangaList">
    <img src={manga.thumbnail_url}  alt="" />
    </div>
    
    <p className='manga-title' >{manga.title}</p>
    <p className='chapter'>Latest Chapter: <span>{manga.latest_chapter}</span></p>
     </div>
  )
}

export default MangaFeed