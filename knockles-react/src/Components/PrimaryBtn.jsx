import React from "react";

const PrimaryBtn = ({ children, link, classes }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`primary_btn ${classes}`}
    >
      {children}
    </a>
  );
};

export default PrimaryBtn;
