// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = ({ isLoggedIn, username }) => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">MySocialApp</Link>
            <div className="navbar-links">
                {isLoggedIn ? (
                    // Display when user is logged in
                    <>
                        <span className="navbar-text">Welcome, {username}</span>
                        <Link to="/create-post">Create Post</Link>
                        <Link to={`/profile/${username}`}>My Profile</Link>
                        <Link to="/logout">Logout</Link>
                    </>
                ) : (
                    // Display when user is not logged in
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
