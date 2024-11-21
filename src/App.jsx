import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Popular from './pages/Popular';
import Search from './pages/Search';
import Wishlist from './pages/Wishlist';
import SignIn from './pages/SignIn';
import MovieDetails from './pages/MovieDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/search" element={<Search />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
};

export default App;
