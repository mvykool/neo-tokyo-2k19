import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
	 e.preventDefault();


	 navigate(`/search/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" >
      <label htmlFor="search-field" className="sr-only"></label>
      <div>
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="Search"
          value={searchTerm}
          type="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search-bar'
        />
      </div>
    </form>
  );
};

export default Search;