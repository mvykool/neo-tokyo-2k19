import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetChapterQuery} from '../redux/apiCore'

const Chapter = () => {

    const { chapterinfo } = useParams();
    const { data, isFetching, error } = useGetChapterQuery( chapterinfo );

    console.log(data?.data)

  return (
  <div>
    chapter
  </div>
  )
  
}

export default Chapter