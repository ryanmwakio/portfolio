import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <>
      <div className="error-page">
        <div className="error-graphic">
          <h4>404!</h4>
          <Link to="/" className="back-link">
            Go to home page{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primarypurple inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error;
