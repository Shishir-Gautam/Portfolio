import React, { useState } from "react";
import emailjs from "emailjs-com";
import './contact.css';

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Shishir Gautam',  // Your name (recipient)
      from_name: email,           // User's email
      message: message,           // User's message
    };

    // Send email to yourself (you receive the message)
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Use Service ID from .env
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Use Template ID from .env
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID    // Use User ID from .env
      )
      .then(
        (result) => {
          console.log(result.text);
          setResponse("Thank you for your message! I'll get back to you as soon as possible.");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          setResponse("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
      {response && <p className="response-message">{response}</p>}
    </div>
  );
}

export default Contact;
