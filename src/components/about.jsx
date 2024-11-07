import React from 'react';
import './about.css';
import College from './assets/College.jpg';

const About = () => {
    return (
        <div className="about-page">
    <h1 className='about-header'>About me</h1>
        {/* Profile Circle */}
        <div className="profile-circle">
            <span>Shishir Gautam</span>
        </div>
    
        {/* Introduction Section */}
        <div className="about-intro">
            <p>
                Hi, I'm Shishir Gautam, a passionate Full MERN Stack Developer with a love for creating dynamic web applications. 
                I believe in the power of clean, efficient code and am constantly pushing myself to learn and grow.
            </p>
            {/* Download Resume Button */}
            <button className="resume-button" onClick={() => window.open('/path-to-your-resume.pdf', '_blank')}>
                Download Resume
            </button>
        </div>
        
        <div className="divider"></div>
    
        {/* Education Section */}
        <div className="education-section">
            <h2>Education</h2>
            <div className="graduation-info">
                <p>
                    I graduated with a Software Support in Computer Science from Mohawk College. Throughout my studies, I focused on 
                    building a strong foundation in computer science principles, software development, and modern technologies. 
                    This journey has equipped me with the knowledge and passion to pursue a career as a full-stack developer.
                </p>
            </div>
            <div className="education-content">
                <div className="college-image-container">
                    <img src={College} alt="College" className="college-image" />
                </div>
                <div className="education-details">
                    <ul>
                        {/* List of Courses */}
                        <li>Data Structures & Algorithms</li>
                        <li>Object-Oriented Programming (OOP)</li>
                        <li>Operating Systems</li>
                        <li>Database Management Systems (DBMS)</li>
                        <li>Computer Networks</li>
                        <li>Web Development (HTML, CSS, JavaScript)</li>
                        <li>Software Engineering Principles</li>
                        <li>Computer Architecture</li>
                        <li>Machine Learning & AI Basics</li>
                        <li>Mobile App Development</li>
                        <li>Cybersecurity Fundamentals</li>
                        <li>Cloud Computing</li>
                        <li>Version Control with Git</li>
                        <li>Agile Development Methodologies</li>
                    </ul>
                </div>
            </div>
        </div>
    
        <div className="divider"></div>
    
        {/* Skills Section */}
        <div className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">
                <div className="skill">
                    <p>HTML</p>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '95%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <p>CSS</p>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '80%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <p>JavaScript</p>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '94%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <p>React</p>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <p>Node.js</p>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <p>MongoDB</p>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '70%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <p>React Native</p>
                    <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: '5%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="divider"></div>
    
        {/* Hobbies Section */}
        <div className="hobbies-section">
            <h2>Hobbies</h2>
            <p>
                When I'm not coding, you'll find me exploring the great outdoors on a hiking trail, diving into the latest tech articles to stay on top of trends, or experimenting with programming languages like a mad scientist looking for the next big breakthrough!
            </p>
            <div className="hobbies-icons">
                <div className="hobby-icon">
                    <i className="fas fa-hiking"></i>
                    <p>Hiking</p>
                </div>
                <div className="hobby-icon">
                    <i className="fas fa-book-open"></i>
                    <p>Reading Tech Articles</p>
                </div>
                <div className="hobby-icon">
                    <i className="fas fa-code"></i>
                    <p>Programming Experiments</p>
                </div>
                <div className="hobby-icon">
                    <i className="fas fa-code"></i>
                    <p>Chess</p>
                </div>
            </div>
        </div>
    
    </div>
    
    );
};

export default About;
