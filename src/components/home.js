import React from 'react'; // Removed 'useState'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaPython, FaGit } from 'react-icons/fa';
import './home.css';

const Home = () => {
    const handleExploreClick = () => {
        window.location.href = "/projects"; // Navigate to your projects page
    };

    return (
        <div className="home1">
            <header className="home-header">
                <h1>Welcome to My Portfolio</h1>
                <p className="Animation">Hi, I'm Shishir Gautam. A passionate Full MERN Stack Developer.</p>
            </header>

            {/* Explore Projects Button */}
            <div className="explore-button-container">
                <button className="explore-button" onClick={handleExploreClick}>
                    Explore Projects
                </button>
            </div>

            {/* Skills Section */}
            <h2>Skills</h2>
            <ul className="skills-list">
                <li><FaHtml5 className="skill-icon" /> HTML</li>
                <li><FaCss3Alt className="skill-icon" /> CSS</li>
                <li><FaReact className="skill-icon" /> React</li>
                <li><FaNodeJs className="skill-icon" /> Node.js</li>
                <li><FaDatabase className="skill-icon" /> MongoDB</li>
                <li><FaGit className="skill-icon" /> Git</li>
                <li><FaPython className="skill-icon" /> Python</li>
                <li><FaDatabase className="skill-icon" /> MySQL</li>
                <li>Express.js</li>
                <li>C#</li>
            </ul>

            {/* Footer Section */}
            <footer className="footer">
                <p>
                    Connect with me on 
                    <a href="https://github.com/Shishir-Gautam" target="_blank" rel="noreferrer"> GitHub</a> 
                    or 
                    <a href="https://www.linkedin.com/in/shishir-gautam-024aa61ba/" target="_blank" rel="noreferrer"> LinkedIn</a>.
                </p>
            </footer>
        </div>
    );
};

export default Home;
