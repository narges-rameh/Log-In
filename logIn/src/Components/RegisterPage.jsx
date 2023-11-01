import React, { useState } from 'react';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    if (username === '') {
      setError('Please enter a username');
    } else if (email === '') {
      setError('Please enter an email');
    } else if (password === '') {
      setError('Please enter a password');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      // Do something with the registration data, e.g., send it to the server
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;