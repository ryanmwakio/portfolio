import React from "react";
import "./ContactSection.css";

function ContactSection() {
  let handleSubmit = (e) => {
    e.preventDefault();
    alert("hello");
  };
  return (
    <>
      <div className="contact-section">
        <div className="line-vertical-right"></div>
        {/* <div className="line-vertical-left"></div> */}
        <div className="form-section  my-10 py-10 px-16 md:px-28">
          <div className="my-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="" id="message"></textarea>
              </div>
              <div className="form-group">
                <button type="submit">send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
