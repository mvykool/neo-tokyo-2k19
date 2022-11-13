import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { useGetListGenreQuery } from '../redux/apiCore';
import { selectGenreListId } from '../redux/genreSlice';
import { genres } from '../redux/constants'
import MangaFeed from './MangaFeed';


const Popular = () => {


/**genres */

const genreListId  = useSelector((state) => state.genre);

const [getGenre, setGetGenre] = useState("")
const {data, isFetching, error } = useGetListGenreQuery(getGenre);


if (isFetching) return "Loading songs...";

if (error) return "Error";


const genreTitle = genres.find(({ value }) => value === genreListId)?.title;



  return (
    <>
     

    <div className='select'>
        <select 
        value={"all"}
        className='list'
        onChange={(e) => setGetGenre(e.target.value)}
        >
            {genres?.map((genre)=> (
                <option className='option' key={genre.value} value={genre.value}>{genre.title}</option>
            ))}
        </select>

        
    </div>
    <div className='mangaContainer'>
    <h3 className='mangaContainer-title'>{genreTitle}</h3>
      </div>
 
 <div> 
    {data?.data?.slice(0,9).map((manga, i)=> (
      <MangaFeed
      key={manga.id}
      manga={manga}
      data={data}
      i={i}
      />
         
    ))}
      <Link className='link' to="/popular">See more</Link>
    </div>
    </>
  )
}

export default Popular