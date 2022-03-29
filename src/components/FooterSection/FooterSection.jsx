import React from "react";
import { Link } from "react-router-dom";
import "./FooterSection.css";

function FooterSection() {
  return (
    <>
      <div className="footer-section" id="footer">
        <div className="footer-logo">
          <Link to="/"></Link>
        </div>
        <div className="footer-info">
          &copy;{new Date().getFullYear()}&nbsp;&nbsp;All rights reserved
          &nbsp;&nbsp;|&nbsp;&nbsp; Ryan Mwakio
        </div>
        <div></div>
      </div>
    </>
  );
}

export default FooterSection;
