import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (username.length < 5 || password.length < 8 || !/[!@#$%^&*]/.test(password)) {
      setError('Invalid username or password');
      return;
    }
    auth.signIn();
    navigate('/books');
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
