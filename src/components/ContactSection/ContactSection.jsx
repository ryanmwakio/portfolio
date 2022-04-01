import React, { useRef } from "react";
import { Fade } from "react-reveal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactSection.css";
import emailjs from "emailjs-com";

function ContactSection() {
  const form = useRef();
  const notify = () =>
    toast.info("functionality not configured yet", {
      position: "top-center",
      autoClose: 1300,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b53bzua",
        "template_0v7mmra",
        form.current,
        "6Gh6RkqvWUeEEp1W7"
      )
      .then(
        (result) => {
          toast.success(
            `😎Thanks ${e.target.name}, Ryan has received your message.`,
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="contact-section" id="contacts">
        <div className="line-vertical-right"></div>
        <div className="line-vertical-left"></div>
        <Fade bottom>
          <div className="form-section  my-10 py-10 px-16 md:px-28">
            <div className="my-form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="user_name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="user_email" required />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" name="subject" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" required />
                </div>

                <div className="form-group">
                  <button type="submit">Send</button>
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
