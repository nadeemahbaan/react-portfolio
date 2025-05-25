
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Pretend this goes to your inbox 😄)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>

      <div className="contact-links">
        <p>Or connect with me:</p>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:you@example.com">Email</a>
      </div>
    </section>
  );
};

export default Contact;
