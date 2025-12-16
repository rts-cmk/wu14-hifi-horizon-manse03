import { useState } from "react";
import { Link } from "react-router-dom";
import "./sass/contact-us.scss";
import { 
  FaFacebookSquare, 
  FaInstagramSquare, 
  FaTwitterSquare, 
  FaYoutubeSquare, 
  FaPhone 
} from "react-icons/fa";

// =====================
// Contact Form Page
// =====================
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
    console.log(form);
    alert("Formular sendt!");
  };

  return (
    <>
      {/* ================= CONTACT SECTION ================= */}
      <section className="contact-section">
        <h1>GET IN TOUCH WITH US</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <FormGroup label="Full name" required>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup label="Email" required>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup label="Subject" required>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup label="Message" required>
            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <div className="form-actions">
            <button type="submit">Send</button>
          </div>
        </form>
      </section>

      {/* ================= BOTTOM INFO ================= */}
      <div className="bottom">
        <h2>
          Visit our sister companies Home Sound and The Movie Rooms part of the
          HiFi Horizon Group.
        </h2>
      </div>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}

// =====================
// Reusable Components
// =====================

function FormGroup({ label, required, children }) {
  return (
    <div className="form-group">
      <label>
        {label} {required && <span>*</span>}
      </label>
      {children}
    </div>
  );
}

function Footer() {
  return (
<footer className="footer">
  <div className="footer__top">
    {/* Column 1: Links */}
    <div className="footer__column">
      <Link to="/" className="footer__link">Home</Link>
      <Link to="/shop" className="footer__link">Shop</Link>
      <Link to="/about-us" className="footer__link">About Us</Link>
    </div>

    {/* Column 2: Policies */}
    <div className="footer__column">
      <Link to="/returns" className="footer__link">Returns & Refunds</Link>
      <Link to="/delivery" className="footer__link">Delivery</Link>
      <Link to="/privacy" className="footer__link">Privacy Policy</Link>
      <Link to="/terms" className="footer__link">Terms & Conditions</Link>
    </div>

    {/* Column 3: Contact + Social Icons */}
    <div className="footer__column">
      <strong>Contact</strong>
      <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
      <p><FaPhone style={{ marginRight: "5px" }} />0131 556 7901</p>
      <p>44 Cow Wynd, Falkirk, FK1 1PU</p>
      <p><FaPhone style={{ marginRight: "5px" }} />01324 629 011</p>

      <div className="footer__icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare size={28} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare size={28} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare size={28} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutubeSquare size={28} />
        </a>
      </div>
    </div>
  </div>

  {/* Footer bottom */}
  <div className="footer__bottom">
    <div className="payment-icons">
      <img src="/Images/stripe.png" alt="Stripe" />
      <img src="/Images/visa.png" alt="Visa" />
      <img src="/Images/mastercard.png" alt="Mastercard" />
    </div>
    <div>
      HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC049238. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU<br />
      Designed by WU07 :)
    </div>
  </div>
</footer>

  );
}
