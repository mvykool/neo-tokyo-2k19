import React from 'react'
import { useGetLatestQuery } from '../redux/apiCore'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Latest = () => {

    const {data, isFetching, error } = useGetLatestQuery();

    if (isFetching) return "Loading songs...";
  
    if (error) return "Error";
  
    console.log(data);


  return (
    
       <Carousel>
      { data?.data?.slice(0,3).map((manga)=> (
        <div className="slider-item">
        <img src={manga.thumbnail_url} alt="image" />
      </div>
      ))}
    </Carousel>

  )
}

export default Latest