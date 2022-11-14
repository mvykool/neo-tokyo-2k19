import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetChapterQuery} from '../redux/apiCore'

const Chapter = () => {

    const { chapterId } = useParams();
    const { data, isFetching, error } = useGetChapterQuery( chapterId );

    console.log(data)

  return (
    <div>
        <h1 className='details'>chapter</h1>
    </div>
  )
}

export default Chapter