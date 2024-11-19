import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/API';
import MovieCard from './MovieCard';

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [viewType, setViewType] = useState('infinite'); // 'infinite' or 'table'
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadMovies(page);
    // eslint-disable-next-line
  }, [page]);

  const loadMovies = (pageNum) => {
    fetchMovies('/movie/popular', pageNum).then((data) => {
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    });
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (viewType === 'infinite') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
    // eslint-disable-next-line
  }, [viewType]);

  return (
    <div>
      <button onClick={() => setViewType('table')}>Table View</button>
      <button onClick={() => setViewType('infinite')}>Infinite Scroll</button>

      {viewType === 'table' ? (
        <table>
          <thead>
            <tr>
              <th>Poster</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>
                  <img src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} alt={movie.title} />
                </td>
                <td>{movie.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PopularMovies;
