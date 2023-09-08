// LoginPage.js

import React from "react";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;