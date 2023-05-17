import React from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Socials = ({color, display}) => {
  return (
    <div className={`flex mb-8 ${display}`}>
      <a
        href="https://www.linkedin.com/in/ifeanyichukwu-eze-b93346214/"
        className="mr-4 animate-wiggle"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn size={40} color={color} />
      </a>
      <a
        href="https://www.instagram.com/west___21/"
        className="mx-4 animate-pulse"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram size={40} color={color} />
      </a>
      <a
        href="https://twitter.com/kamsey21"
        className="mx-4 animate-wiggle"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter size={40} color={color} />
      </a>
    </div>
  );
};

export default Socials;
