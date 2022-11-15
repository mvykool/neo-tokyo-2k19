import React,{ useState} from 'react'
import { useParams } from 'react-router-dom'
import { useGetDetailsQuery } from '../redux/apiCore'
import { useNavigate } from 'react-router-dom';





const Details = () => {

    const { id } = useParams();
    const { data, isFetching, error } = useGetDetailsQuery( id );


    /**get chapter */
    
    
    const navigate = useNavigate();
    const [chapter, setChapter] = useState("");

    const handleClick = (chapterId) => {
 
      
        setChapter(chapterId)
        console.log(chapterId)
        navigate(`/chapters`)
      }


  console.log(data?.data)

  return (
    <div className='details' key={data?.data.title}>
    
       <img className='details-bg' src={data?.data.thumbnail_url} alt="img"/>
     <div className='details-text-container'>
     <h1 className='details-title'>{data?.data.title.toUpperCase()}</h1>
      <p className='details-author'> <span className='detail-span'>Author: </span> {data?.data.authors}</p>
      <p className='details-status'> <span className='detail-span'>Status: </span> {data?.data.status}</p>
      <p className='details-last'> <span className='detail-span'>Last Post: </span> {data?.data.last_updated}</p>
      <p className='details-rating'> <span className='detail-span'>Rating: </span> {data?.data.rating}</p>
      <p className='details-view'> <span className='detail-span'>Views:</span> {data?.data.views_count}</p>
      <div className='details-genres'>{data?.data.genres.map((genre)=> (
        <p className='genre' key={genre}>{genre}</p>
      ))}</div>
     </div>
    
     <h3 className='details-second-title'>Description</h3>
      <p className='truncate'>{data?.data.description}</p>

      <h3 className='details-second-title'>Chapters</h3>

      <div className='chapter-container'>
      {data?.data.chapters.map((chapter, i)=> (
        <div className='chapter-card' key={chapter.id} onClick={()=> handleClick(chapter.id)}>
           
            <p className='details-chapter'>{chapter.title}</p>
            <p className='chapter-date'>Posted: {chapter.uploaded_at}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Details

