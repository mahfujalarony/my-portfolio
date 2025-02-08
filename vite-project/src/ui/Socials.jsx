import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com" },
  { icon: <FaLinkedin />, path: "https://linkedin.com" },
  { icon: <FaYoutube />, path: "https://youtube.com" },
  { icon: <FaTwitter />, path: "https://twitter.com" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path} // use href instead of to
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

export default Socials;
