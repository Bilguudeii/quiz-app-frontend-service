import React, { useState } from 'react';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmailAddress = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const createUser = (userData) => {
    console.log('Creating user with data:', userData);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!username.trim()) {
      validationErrors.username = 'Username is required';
    }
    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!validateEmailAddress(email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }
    if (!age.trim()) {
      validationErrors.age = 'Age is required';
    } else if (isNaN(age) || +age <= 0) {
      validationErrors.age = 'Invalid age';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      createUser({ username, email, password, age });
    }
  };

  return (
    <section>
      {[...Array(100)].map((_, index) => (
        <span key={index}></span>
      ))}
      <div className="signin">
        <div className="content">
          <h2>Sign Up</h2>

          <div className="form">
            <form onSubmit={handleSignUp}>
              <div className="inputBox">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <i>Username</i>
                {errors.username && <span className="error">{errors.username}</span>}
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <i>Email</i>
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i>Password</i>
                {errors.password && <span className="error">{errors.password}</span>}
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <i>Confirm Password</i>
                {errors.confirmPassword && (
                  <span className="error">{errors.confirmPassword}</span>
                )}
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <i>Age</i>
                {errors.age && <span className="error">{errors.age}</span>}
              </div>

              <div className="links">
                <a href="#">Forgot Password</a>
                <a href="/login">Login</a>
              </div>

              <div className="inputBox">
                <input type="submit" value="Sign Up" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
