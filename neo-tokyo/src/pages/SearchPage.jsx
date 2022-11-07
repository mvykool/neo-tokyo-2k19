import { useParams } from 'react-router-dom';
import { useGetSearchQuery} from '../redux/apiCore';

const SearchPage = () => {
  const { searchTerm} = useParams();
  const { data, isFetching, error } = useGetSearchQuery(searchTerm);

  if (isFetching) return "loading";

  if (error) return console.log(error);

 console.log(error)

  return (
    <>
    <div className='mangaContainer'>
    {data?.data?.map((manga, i)=> (
      <div key={manga.id} className='manga'>
        <div className="mangaList">
        <img src={manga.thumbnail_url} alt="" />
        </div>
        
        <p className='manga-title' >{manga.title}</p>
        <p className='chapter'>Latest Chapter: <span>{manga.latest_chapter}</span></p>
         </div>
         
    ))}
    </div>
    </>
  );
};

export default SearchPage;