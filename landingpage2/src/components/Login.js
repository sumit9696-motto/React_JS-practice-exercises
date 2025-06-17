import React, { useState } from "react";
import './landing.css'
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const    Login=()=>{
     const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now: just log the form data
    console.log("Login Data:", { email, password });

    // Here you could send this to an API:
    // fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) })

    alert("Login submitted!");
  };
    return (<>
    <Nav />
     <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
    <Footer />
    
    </>
        

    )
}