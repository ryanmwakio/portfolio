import React from "react";
import { Fade } from "react-reveal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactSection.css";

function ContactSection() {
  const notify = () =>
    toast("Sorry the functionality has not yet been wired by Ryan, chillax", {
      position: "top-center",
      autoClose: 3000,
    });

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <ToastContainer />
      <div className="contact-section" id="contacts">
        <div className="line-vertical-right"></div>
        {/* <div className="line-vertical-left"></div> */}
        <Fade bottom>
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
                  <button type="submit" onClick={notify}>
                    send message
                  </button>
                </div>
              </form>
              <p className="my-email">ryanmwakio6@gmail.com</p>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default ContactSection;
