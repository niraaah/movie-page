import React from 'react';

function MovieCard({ movie, toggleWishlist }) {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <button onClick={() => toggleWishlist(movie)}>
        {movie.inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
      </button>
    </div>
  );
}

export default MovieCard;
