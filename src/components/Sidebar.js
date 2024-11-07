import React, { useState } from 'react';
import '../App.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul className="sidebar-list">
                    <li className="sidebar-item">
                        <a href="https://github.com/Shishir-Gautam" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <FaGithub className="sidebar-icon" />
                        
                    </li>
                    <li className="sidebar-item">
                        <a href="https://www.linkedin.com/in/shishir-gautam-024aa61ba/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <FaLinkedin className="sidebar-icon" /> 
                    </li>
                    
                </ul>
            </div>
            <div className="menu-icon" onClick={toggleSidebar}>
            ☰   {/* This is a simple hamburger icon */}
            </div>
        </div>
    );
};

export default Sidebar;
