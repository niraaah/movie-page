import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/API';
import MovieCard from '../components/MovieCard';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies('/movie/popular').then((data) => setMovies(data.results));
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
