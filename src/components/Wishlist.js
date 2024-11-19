import React from 'react';

function Wishlist({ movies }) {
  return (
    <div>
      <h2>Your Wishlist</h2>
      {movies.length === 0 ? <p>No movies in wishlist.</p> : movies.map((movie) => <p key={movie.id}>{movie.title}</p>)}
    </div>
  );
}

export default Wishlist;
