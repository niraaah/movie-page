import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { getWishlist } from '../utils/WishlistManager';

function WishlistPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(getWishlist());
  }, []);

  return (
    <div>
      <h2>Your Wishlist</h2>
      {movies.length === 0 ? (
        <p>No movies in your wishlist.</p>
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

export default WishlistPage;
