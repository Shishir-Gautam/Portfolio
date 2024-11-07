import Jobs from './assets/Jobs.png';
import Movies from './assets/Movies.png'; 
import Task from './assets/Task.png';  // Adjust the path as necessary
import Weather from './assets/Weather.png'; 
const projectData = [
    {
        title: 'Movies recommendations',
        type: 'image',
        media: Movies, // Update this if you have a valid path
        description: "Discover and explore movies with personalized recommendations based on your favorite genres and ratings",
        demo: 'https://movies-recommendation-00bm.onrender.com/',
        github: 'https://github.com/Shishir-Gautam/movies-recommendation',
        readme: 'https://github.com/repo1#readme'
    },
    {
        title: 'Weather-App',
        type: 'image',
        media: Weather, 
        description: "Get real-time weather updates! Search any city or use your location to see current conditions, including temperature and humidity. Recent searches are saved for easy access.",
        demo: 'https://weather-k78r.onrender.com',
        github: 'https://github.com/Shishir-Gautam/weather',
        readme: 'https://github.com/repo2#readme'
    },
    {
        title: 'Task Manager',
        type: 'image',
        media: Task, // Now you're using the correct image import
        description: "Frontend: HTML, CSS, JavaScript. Backend: Node.js, Express.js Database: MongoDB Deployment: Render.",
        demo: 'https://task-manager-wiv4.onrender.com/',
        github: 'https://github.com/Shishir-Gautam/Task-Manager.git',
       
    },
   
    {
        title: 'Job-API',
        type: 'image',
        media: Jobs, 
        description: "A robust backend API for job listings, built with Node.js and Express, featuring Swagger for documentation and ease of use.",
        demo: 'https://jobs-api-ugox.onrender.com',
        github: 'https://github.com/Shishir-Gautam/JOBS_API',
        readme: 'https://github.com/repo2#readme'
    },
];

export default projectData;
