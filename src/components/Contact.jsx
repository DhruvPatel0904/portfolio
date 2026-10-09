import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_6yf0y4w",
        "template_ioprwwj",
        form.current,
        {
          publicKey: "Y7bJzLXqTZduhElfv",
        }
      )
      .then(
        () => {
          alert("Message sent successfully! 🚀");
          form.current.reset();
          setSending(false);
        },
        (error) => {
          console.log(error);
          alert("Failed to send message. Please try again.");
          setSending(false);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

       
        <div className="contact-info">
          <span className="contact-tag">GET IN TOUCH</span>

          <h2>
            Let's Work <span>Together</span>
          </h2>

          <p>
            Have a project in mind or want to discuss an opportunity?
            Feel free to send me a message. I'll get back to you as soon
            as possible.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <div className="detail-icon">📧</div>
              <div>
                <small>Email</small>
                <h4>dp7847951@gmail.com</h4>
              </div>
            </div>

            <div className="contact-detail">
              <div className="detail-icon">📱</div>
              <div>
                <small>Phone</small>
                <h4>+91 99097 26390</h4>
              </div>
            </div>

            <div className="contact-detail">
              <div className="detail-icon">📍</div>
              <div>
                <small>Location</small>
                <h4>India</h4>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-card">

          <div className="form-header">
            <h3>Send Me a Message</h3>
            <p>I'll reply to you shortly.</p>
          </div>

          <form ref={form} onSubmit={handleSubmit}>

            <div className="input-row">
              <div className="input-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="input-group">
                <label>Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Subject</label>
              <input
                type="text"
                name="title"
                placeholder="What is this about?"
                required
              />
            </div>

            <div className="input-group">
              <label>Your Message</label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows="6"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="send-btn"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message 🚀"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;