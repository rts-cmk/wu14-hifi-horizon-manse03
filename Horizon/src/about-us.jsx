import React from "react";
import { Link } from "react-router-dom";
import "./sass/about-us.scss";
import { FaPhone, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare, FaStripe, FaCcVisa, FaCcMastercard } from "react-icons/fa";


export default function AboutUs() {
  return (
    <>
    <div className="about-us">
      {/* History Section */}
      <section className="about-us__section about-us__section--history">
        <div className="about-us__image-container">
          <img src="/Images/picture1.png" alt="Our shop in the 1960s" className="about-us__image" />
        </div>
        <div className="about-us__content">
          <h2 className="about-us__heading">History</h2>
          <p className="about-us__highlight">
             <span className="about-us__accent">Established in the late 1960s our family owned business is based
            in</span>,  <span className="about-us__accent">Edinburgh and</span>  <span className="about-us__accent">Falkirk, has services customers across the UK.</span>
            
          </p>
          <p className="about-us__text">
            Our Edinburgh branch has the longest history as an audio retailer in the UK. During recent renovations,
            receipts were found from Nisbet's Gramophone Saloon dating back to 1926. In the 1950s WG Graham took over
            the shop and renamed it WG Graham's Hi-Fi Corner. For the next forty years, Graham Tripp bought the business
            and traded very successfully as Richer Sounds.
          </p>
          <p className="about-us__text">
            Soon thereafter a young enthusiast, Colin Mackenzie (left), who was recommended by Lynn's own son
            Thistlethum, was employed to manage the shop, with a knack for business and years of experience in the hi-fi
            industry, Colin would later become the owner of Richer Sounds. Today, Stuart Mackenzie carries on the family
            tradition of quality hi-fi retail.
          </p>
        </div>
      </section>

      {/* Hear The Difference Section */}
      <section className="about-us__section about-us__section--hear">
        <div className="about-us__content">
          <h2 className="about-us__heading">Hear The Difference</h2>
          <p className="about-us__subtitle">
             <span className="about-us__accent">Book a demonstration at ourEdinburgh or</span> {" "}
            <span className="about-us__accent">Falkirk showrooms</span>.
          </p>
          <p className="about-us__text">
            Would you choose a quality car without a test drive? If you are familiar with the brand and have great trust
            in it, you might. However, our listening preferences are unique to the individual and each room, of our
            customers stay in the world of high-end and professional audio means that we are able to look after a wide
            variety of products they are interested in. You'll find a relaxing and comfortable environment in both our
            Edinburgh and Falkirk premises where you can decide for yourself if the equipment is the right match for you
            and your home.
          </p>
          <p className="about-us__text">It's our aim to get the right product for you.</p>
          <p className="about-us__text">
            Our experts are on hand to guide you through the differences between speakers, amplifiers, and sources and
            provide simple solutions that suit your needs.
          </p>
        </div>
        <div className="about-us__image-container">
          <img src="/Images/picture2.png" alt="Our Edinburgh showroom" className="about-us__image" />
        </div>
      </section>

      {/* Services Section */}
      <section className="about-us__section about-us__section--services">
        <div className="about-us__image-container">
          <img src="/Images/picture3.png" alt="Professional installation" className="about-us__image" />
        </div>
        <div className="about-us__content">
          <h2 className="about-us__heading">Services</h2>
          <p className="about-us__highlight about-us__highlight--services">
            Our passion for the products we sell and, for our customers' satisfaction simply means that we happily offer
            additional services not found on the high street.
          </p>

          <div className="about-us__service">
            <h3 className="about-us__service-title">Home Setup</h3>
            <p className="about-us__text">
              We want to ensure that the equipment you've purchased is installed correctly and sounds perfect, and we
              happily provide this service throughout the UK.
            </p>
          </div>

          <div className="about-us__service">
            <h3 className="about-us__service-title">Part Exchange</h3>
            <p className="about-us__text">
              To help you upgrade your system, we offer our part-exchange program. We can offer a fair price, or sell
              your old kit on your behalf.
            </p>
          </div>

          <div className="about-us__service">
            <h3 className="about-us__service-title">Turntable Doctor</h3>
            <p className="about-us__text">
              Our turntable experts have been trained by the manufacturers for initial setup, long-term maintenance, and
              upgrading your high-quality turntables.
            </p>
          </div>

          <div className="about-us__service">
            <h3 className="about-us__service-title">Record Cleaning Service</h3>
            <p className="about-us__text">
              Have some old records that need a bit of love? We offer Scotland's very own professional record cleaning
              service with our record cleaner.
            </p>
          </div>
        </div>
      </section>

      {/* Tailored For You Section */}
      <section className="about-us__section about-us__section--tailored">
        <div className="about-us__content">
          <h2 className="about-us__heading">Tailored For You</h2>
          <p className="about-us__highlight about-us__highlight--tailored">
            We look forward to customising a system to meet your needs.
          </p>
          <p className="about-us__text">
            We don't favour one manufacturer over another – the only thing we do favour is making sure our customers are
            happy with what they buy and listening preferences. We will ask you some fairly awkward questions in order
            to ensure that what we buy from us is properly tailored to you and your space.
          </p>
          <p className="about-us__text">
            If you are looking for a product not found in our demonstration showrooms or our online site, simply let us
            know as we have access to hundreds of brands.
          </p>
          <p className="about-us__text">
            One of our biggest pleasures of working in this industry is to see the smile on our customers' faces when
            they finally hear and see the system of their dreams.
          </p>
        </div>
        <div className="about-us__image-container">
          <img src="/Images/picture4.png" alt="Customer listening experience" className="about-us__image" />
        </div>
      </section>
    </div>

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
      <Link to="/faq" className="footer__link">Returns & Refunds</Link>
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
    <FaStripe size={28} style={{ color: "#fff" }} />
    <FaCcVisa size={28} style={{ color: "#fff" }} />
    <FaCcMastercard size={28} style={{ color: "#fff" }} />
  </div>
  <div>
    HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC049238. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU<br />
    Designed by WU07 :)
  </div>
</div>
</footer>
</>
  )
}
