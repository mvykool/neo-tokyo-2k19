import React from 'react'
import { useParams } from 'react-router-dom'
import MangaFeed from '../components/MangaFeed'

import { useGetSearchQuery } from '../redux/apiCore'

const SearchPage = () => {

const { searchTerm } = useParams();
const { data, isFetching, error } = useGetSearchQuery(searchTerm.replaceAll(' ', '_'));


if(isFetching) return <p>loading</p>;

if(error) return <p>error</p>;


console.log(data)

  return (
    <div>
      <h1 className='search-title'>Results of: {searchTerm}</h1>
      { data?.data?.map((manga, i)=> (
       <MangaFeed
       key={manga.id}
       manga={manga}
       data={data}
       i={i}
       />
      ) )}
       <small className='no-more-results'>No more results</small>
    </div>
  )
}

export default SearchPage