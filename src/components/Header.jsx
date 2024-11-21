import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Assuming we create a corresponding CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">🎬 Netflix Clone</Link>
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/popular">Popular</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
        </ul>
      </nav>
      <div className="header-user">
        <Link to="/signin">Sign In</Link>
      </div>
    </header>
  );
};

export default Header;
