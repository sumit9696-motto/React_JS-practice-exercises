import React from "react";
import './landing.css';
import { Link } from "react-router-dom";
export const Nav= ()=>{
    return (
         <nav>
                <div className="logo"> Page</div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/Pokemon">Pokemon</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            </nav>
    )
}