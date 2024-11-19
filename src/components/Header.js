import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">MovieApp</Link>
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/search">Search</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/signin">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
