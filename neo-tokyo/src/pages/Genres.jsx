import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetGenreQuery } from '../redux/apiCore';
import { selectGenreListId } from '../redux/genreSlice';

const Genres = () => {

    const dispatch = useDispatch();
    const genreListId = useSelector((state) => state.genre);
    /**using discpatch */
    const navigate = useNavigate();
   /**create state to get genreid */



    /**use effect */

    
    /**bringing  function from redux */


    const {data, isFetching, error } = useGetGenreQuery(genreListId || "all");


    if (isFetching) return "Loading songs...";

    if (error) return "Error";
  
    console.log(data);

    /**fire dispatch */


    const dispatchUsed = (e) =>{
        dispatch(selectGenreListId(e.target.value))
        let genreWord = e.target.value;
        navigate(`/genre/${genreWord}`);
    }



   

  return (
    <div className='select'>
        <select 
        name="genre"
        value={genreListId || "all"}
        className='list'
        onChange={(e) => dispatchUsed(e)}
        >
            {data?.data?.map((genre)=> (
                <option className='option' key={genre.title} value={genre.title}>{genre.title}</option>
            ))}
        </select>
    </div>
  )
}



export default Genres