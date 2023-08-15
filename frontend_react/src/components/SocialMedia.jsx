import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/arpit-trivedi-ab216b2a/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/arpitz?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      {/* <div>
        <BsInstagram />
      </div> */}
    </div>
  );
};

export default SocialMedia;
