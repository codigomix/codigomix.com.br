import React from "react";

const SocialLink = (props) => {
  const media = props.media;

  return (
    <div>
      <a
        href="https://twitter.com/codigomix"
        target="_blank"
        rel="noreferrer"
        className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 px-3 py-2.5"
        type="button"
      >
        <i className="flex fab fa-twitter"></i>
      </a>
    </div>
  );
};

export default SocialLink;
