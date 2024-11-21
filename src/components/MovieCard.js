import React, { useState } from 'react';

function MovieCard({ movie }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="movie-card" onClick={() => setShowDetails(!showDetails)}>
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
      {showDetails && (
        <div className="movie-details">
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
