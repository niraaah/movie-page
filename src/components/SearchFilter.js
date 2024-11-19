import React, { useState } from 'react';

function SearchFilter({ onFilter }) {
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [sortBy, setSortBy] = useState('');

  const applyFilter = () => onFilter({ genre, rating, sortBy });

  const resetFilter = () => {
    setGenre('');
    setRating('');
    setSortBy('');
    onFilter({ genre: '', rating: '', sortBy: '' });
  };

  return (
    <div>
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="">All Genres</option>
        <option value="28">Action</option>
        <option value="35">Comedy</option>
        {/* Add more genres as needed */}
      </select>
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="">All Ratings</option>
        <option value="7">7+ Rating</option>
        <option value="8">8+ Rating</option>
      </select>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Default</option>
        <option value="popularity.desc">Most Popular</option>
        <option value="release_date.desc">Newest</option>
      </select>
      <button onClick={applyFilter}>Apply</button>
      <button onClick={resetFilter}>Reset</button>
    </div>
  );
}

export default SearchFilter;
