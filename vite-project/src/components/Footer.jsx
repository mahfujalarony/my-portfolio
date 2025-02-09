import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/mahfujalarony" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/mahfujalamrony/" },
  { icon: <FaFacebook />, path: "https://web.facebook.com/profile.php?id=100070429084257" },
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
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
          <p className="mt-2 text-gray-400">
            Or manually email: 
            <span
              className="text-blue-400 cursor-pointer"
              onClick={() => navigator.clipboard.writeText('mahfujalamrony07@gmail.com')}
            >
              mahfujalamrony07@gmail.com (Click to copy)
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
