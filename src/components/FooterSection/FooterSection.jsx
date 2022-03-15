import React from "react";
import { Link } from "react-router-dom";
import "./FooterSection.css";

function FooterSection() {
  return (
    <>
      <div className="footer-section">
        <div className="footer-logo">
          <Link to="/">R</Link>
        </div>
        <div className="footer-info">
          All rights reserved&nbsp;&nbsp;|&nbsp;&nbsp; Ryan Mwakio
        </div>
        <div></div>
      </div>
    </>
  );
}

export default FooterSection;