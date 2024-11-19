import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PopularPage from './pages/PopularPage';
import WishlistPage from './pages/WishlistPage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';

function App() {
  const [user, setUser] = useState(localStorage.getItem('user') || null);

  const handleLoginSuccess = (email) => {
    setUser(email);
    localStorage.setItem('user', email);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <Header user={user} onLogout={handleLogout} />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/popular" component={PopularPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/wishlist">
            {user ? <WishlistPage /> : <Redirect to="/signin" />}
          </Route>
          <Route path="/signin">
            <LoginPage onLoginSuccess={handleLoginSuccess} />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
