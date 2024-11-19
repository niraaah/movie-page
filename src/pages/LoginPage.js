import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

function LoginPage({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="auth-page">
      <div className={`auth-container ${isLogin ? '' : 'signup-mode'}`}>
        {isLogin ? (
          <LoginForm onLoginSuccess={onLoginSuccess} />
        ) : (
          <SignupForm />
        )}
        <button onClick={toggleForm}>
          {isLogin ? 'Switch to Signup' : 'Switch to Login'}
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
