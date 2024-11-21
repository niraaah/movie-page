import React from 'react';
import '../styles/MovieCard.css'; // Assuming we create a corresponding CSS file

const MovieCard = ({ movie, onToggleWishlist }) => {
  const { id, title, poster_path } = movie;

  const handleWishlistClick = () => {
    onToggleWishlist(movie);
  };

  return (
    <div className="movie-card" key={id}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        className="movie-poster"
      />
      <div className="movie-details">
        <h3>{title}</h3>
        <button onClick={handleWishlistClick} className="wishlist-btn">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
