import { useState } from "react";
import "./sass/contact-us.scss";


// Kontakt formularen
export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);

    alert("Formular sendt!");
  };

// Input felterne
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full name *"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email *"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject *"
        value={form.subject}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Message *"
        rows="5"
        value={form.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Send</button>
    </form>
  );
}
