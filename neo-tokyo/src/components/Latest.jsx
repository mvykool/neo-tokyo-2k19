import React from 'react'
import { useGetLatestQuery } from '../redux/apiCore'

const Latest = () => {

    const {data, isFetching, error } = useGetLatestQuery();

    if (isFetching) return "Loading songs...";
  
    if (error) return "Error";
  
    console.log(data);


  return (
    

<>
<h3 className='latest-title'>Latest mangas:</h3>

       <div className="main-section-container">   
       <div className="slider-track">  
   { data?.data?.slice(0,8).map((manga)=> (
    <div key={manga.id}>
    <div className='slide-manga' >
     <img className='manga-slide' src={manga.thumbnail_url} alt="" />
     </div>               
    </div>
   ))}
 </div>
 </div>


 </>
  )
}

export default Latest