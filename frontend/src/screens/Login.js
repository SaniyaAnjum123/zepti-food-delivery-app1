import React from 'react';
import '../index.css'; // Import CSS file for styling
export default function Login() {
  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="Email mail" placeholder="Email mail" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>
          <div className="form-group">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">Check me out</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
