import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/API';
import MovieCard from '../components/MovieCard';
import SearchFilter from '../components/SearchFilter';

function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const { genre, rating, sortBy } = filters;
    fetchMovies('/discover/movie', 1, genre, rating, sortBy).then((data) => setMovies(data.results));
  }, [filters]);

  return (
    <div>
      <h2>Search Movies</h2>
      <SearchFilter onFilter={setFilters} />
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
