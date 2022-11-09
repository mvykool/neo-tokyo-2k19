import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useGetGenreQuery } from '../redux/apiCore'

const Genres = () => {
    
    const navigate = useNavigate();
   /**create state to get genreid */
   const [ getGenre, setGetGenre ] = useState('');


    const {data, isFetching, error } = useGetGenreQuery();


    if (isFetching) return "Loading songs...";

    if (error) return "Error";
  
    console.log(data);



    const handleClick = (e) => {
        e.preventDefault();
   
        navigate(`/genre/${getGenre}`);
     }; 


  return (
    <div className='select'>
        <select 
        name="genre"
        id='genre'
        value={getGenre}
        className='list'
        onChange={(e) => setGetGenre(e.target.value)}
        >
            {data?.data?.map((genre)=> (
                <option className='option' key={genre.title} onClick={handleClick} value={genre.title}>{genre.title}</option>
            ))}
        </select>
    </div>
  )
}



export default Genres