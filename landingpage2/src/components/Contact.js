import React, { useState } from "react";
import './landing.css';
import { Footer } from "./Footer";
import { Nav } from "./Nav";
export const  Contact=()=>{

    const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", form);
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };
   return  (
    <>
     <Nav />
           <section  id="contact" className="btn-section">
                <h1>Ready to Start ?</h1>
                <button className="btn-nav">Contact Us</button>
                 <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
            </section>
            <Footer />
            </>
   )
};