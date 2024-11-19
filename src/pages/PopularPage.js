import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/API';
import MovieCard from '../components/MovieCard';

function PopularPage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const loadMoreMovies = () => {
    fetchMovies(`/movie/popular?page=${page}`).then((data) => {
      setMovies((prev) => [...prev, ...data.results]);
      setPage((prev) => prev + 1);
    });
  };

  useEffect(() => {
    loadMoreMovies();
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <button onClick={loadMoreMovies}>Load More</button>
    </div>
  );
}

export default PopularPage;
