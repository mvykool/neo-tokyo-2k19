import React from 'react'
import { useParams } from 'react-router-dom'

import { useGetListGenreQuery} from '../redux/apiCore'

const ListGenre = () => {
    

    const { genreWord } = useParams();
    const { data, isFetching, error} = useGetListGenreQuery(genreWord);

    if(isFetching) return <p>loading</p>;

    if(error) return <p>error</p>;
    
    console.log(getGenre)
    
    console.log(data)


  return (
    <div>
      <h3 className='genre-title'>{genreWord}:</h3>
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
  )
}

export default ListGenre