import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetChapterQuery} from '../redux/apiCore'

const Chapter = ({id}) => {

    const { data, isFetching, error } = useGetChapterQuery( id );

    console.log(data?.data)

  return (
  <div>
    chapter
  </div>
  )
  
}

export default Chapter