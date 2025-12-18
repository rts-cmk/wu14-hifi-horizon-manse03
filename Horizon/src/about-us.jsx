import React from "react";
import { Link } from "react-router-dom";
import "./sass/about-us.scss";

import {
  FaPhone,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaStripe,
  FaCcVisa,
  FaCcMastercard
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-container">
        <h2 className="about-us-title">OUR HISTORY</h2>

        <div className="history-section">
          <div className="history-block">
            <img src="/Images/picture1.png" alt="Hear The Difference" />
            <div className="history-text">
              <h3>Established in the late 1960s, our family owned business is based in Edinburgh <br /> and Falkirk, but services customers across the UK. </h3>
              <p>
                Book a demonstration at our Edinburgh or Falkirk showrooms.
                Would you choose a quality car without a test drive?
              </p>
            </div>
          </div>

          <div className="history-block reverse">
            <div className="history-text">
              <h3>History</h3>
              <p>
                Established in the late 1960s, our family owned business is
                based in Edinburgh and Falkirk.
              </p>
            </div>
            <img src="/Images/picture2.png" alt="History" />
          </div>

          <div className="history-block">
            <img src="/Images/picture3.png" alt="Tailored For You" />
            <div className="history-text">
              <h3>Tailored For You</h3>
              <p>
                We look forward to customizing a system to meet your needs.
              </p>
            </div>
          </div>

          <div className="history-block reverse">
            <div className="history-text">
              <h3>Services</h3>
              <p>
                Our passion for the products we sell means we happily offer
                additional services.
              </p>
            </div>
            <img src="/Images/picture4.png" alt="Services" />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__top">
          <div className="footer__column">
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/shop" className="footer__link">Shop</Link>
            <Link to="/about-us" className="footer__link">About Us</Link>
          </div>

          <div className="footer__column">
            <Link to="/returns" className="footer__link">Returns & Refunds</Link>
            <Link to="/delivery" className="footer__link">Delivery</Link>
            <Link to="/privacy" className="footer__link">Privacy Policy</Link>
            <Link to="/terms" className="footer__link">Terms & Conditions</Link>
          </div>

          <div className="footer__column">
            <strong>Contact</strong>
            <p><FaPhone /> 0131 556 7901</p>

            <div className="footer__icons">
              <FaFacebookSquare />
              <FaTwitterSquare />
              <FaInstagramSquare />
              <FaYoutubeSquare />
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <FaStripe />
          <FaCcVisa />
          <FaCcMastercard />
        </div>
      </footer>
    </>
  );
};

export default AboutUs;
