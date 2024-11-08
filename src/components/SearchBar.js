import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="도서 검색..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit">검색</button>
    </form>
  );
}

export default SearchBar;
