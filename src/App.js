import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PopularPage from './pages/PopularPage';
import SearchPage from './pages/SearchPage';
import WishlistPage from './pages/WishlistPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/signin" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
