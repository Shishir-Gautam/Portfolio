import React from 'react';
import '../App.css'; // Import the CSS file for styles
import { Link } from 'react-router-dom'; // Import Link for routing

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item home">
                    <Link to="/">Home</Link> {/* Link to Home page */}
                </li>
                <li className="navbar-item">
                    <Link to="/projects">Projects</Link> {/* Link to Projects page */}
                </li>
                 {/* New About Me link */}
                 <li className="navbar-item about">
                    <Link to="/about">About Me</Link> {/* Link to About Me page */}
                </li>
                <li className="navbar-item">
                    <Link to="/contact" className="contact-button">Contact Me</Link> {/* Link to Contact page */}
                </li>
               
            </ul>
        </nav>
    );
};

export default Navbar;
