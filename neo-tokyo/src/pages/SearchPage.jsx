import React from 'react'
import { useParams } from 'react-router-dom'

import { useGetSearchQuery } from '../redux/apiCore'

const SearchPage = () => {

const { searchTerm } = useParams();
const { data, isFetching, error } = useGetSearchQuery(searchTerm.replaceAll(' ', '_'));


if(isFetching) return <p>loading</p>;

if(error) return <p>error</p>;

console.log(searchTerm)

console.log(data)

  return (
    <div>
      <h1 className='search-title'>Results of: {searchTerm}</h1>
      { data?.data?.map((manga, i)=> (
        <div key={manga.id} className='manga'>
        <div className="mangaList">
        <img src={manga.thumbnail_url} alt="" />
        </div>
        
        <p className='manga-title' >{manga.title}</p>
        <p className='chapter'>Latest Chapter: <span>{manga.latest_chapter}</span></p>
         </div>
      ) )}
       <small className='no-more-results'>No more results</small>
    </div>
  )
}

export default SearchPage