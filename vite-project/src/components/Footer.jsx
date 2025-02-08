import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import emailjs from "emailjs-com"; 

const socials = [
  { icon: <FaGithub />, path: "https://github.com/mahfujalarony" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/mahfujalamrony/" },
  { icon: <FaFacebook />, path: "https://web.facebook.com/profile.php?id=100070429084257" }, // Facebook
  { icon: <SiLeetcode />, path: "https://leetcode.com/u/mahhfujalamrony/" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID", 
        e.target, 
        "YOUR_USER_ID" 
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );

   
    e.target.reset();
  };

  return (
    <div id="footer" className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>

       
        <div className="flex justify-center mb-8">
          <Socials
            containerStyles="flex space-x-6"
            iconStyles="text-2xl text-gray-400 hover:text-blue-500 transition-colors"
          />
        </div>

        
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={sendEmail}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message" 
                rows="5"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        
        <div className="mt-8 text-center">
          <a
            href="mailto:mahfujalamrony07@gmail.com" 
            className="inline-flex items-center bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <FaEnvelope className="mr-2" />
            Send me an Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;