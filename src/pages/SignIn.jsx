import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tryLogin, tryRegister } from '../services/Authentication';
import '../styles/SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    tryLogin(
      email,
      password,
      () => {
        alert('Login successful!');
        navigate('/');
      },
      () => alert('Invalid email or password.')
    );
  };

  const handleRegister = () => {
    tryRegister(
      email,
      password,
      () => {
        alert('Registration successful!');
        setIsRegistering(false);
      },
      (err) => alert(err.message)
    );
  };

  return (
    <div className="signin">
      <h1>{isRegistering ? 'Register' : 'Sign In'}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          isRegistering ? handleRegister() : handleLogin();
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">{isRegistering ? 'Register' : 'Sign In'}</button>
      </form>
      <button
        onClick={() => setIsRegistering((prev) => !prev)}
        className="toggle-btn"
      >
        {isRegistering ? 'Switch to Sign In' : 'Switch to Register'}
      </button>
    </div>
  );
};

export default SignIn;
