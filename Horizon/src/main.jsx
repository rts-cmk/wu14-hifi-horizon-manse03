import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './sass/index.css';
import './sass/main.scss';
import App from './App.jsx';
import Shop from './shop.jsx';
import AboutUs from './about-us.jsx';
import ContactUs from './contact-us.jsx';
// import { ImFacebook2 } from "react-icons/im";
// import { FaTwitter } from "react-icons/fa";

// Produkter på forsiden
const HomePage = () => (
  <>
    <section className="mid">
      <div className="popular">
        <h2 className="popular__title">POPULAR PRODUCTS</h2>
        <a href="/" className="popular__btn">See all products</a>
      </div>

      <div className="popular__products">

        <article className="product-card">
          <div className="product-card__image">
            <img src="/Images/auralic.png" alt="Auralic Aries G2.1 Streamer" />
          </div>
          <h3 className="product-card__title">
            Auralic Aries G2.1 Streamer (Digital Output)
          </h3>
          <p className="product-card__price">£ 4,799.00</p>
          <Link to="/shop" className="product-card__btn">Read more</Link>
        </article>

        <article className="product-card">
          <div className="product-card__image">
            <img src="/Images/auralic.png" alt="Auralic Aries G2.1 Streamer" />
          </div>
          <h3 className="product-card__title">
            Auralic Aries G2.1 Streamer (Digital Output)
          </h3>
          <p className="product-card__price">£ 4,799.00</p>
          <Link to="/shop" className="product-card__btn">Read more</Link>
        </article>

        <article className="product-card">
          <div className="product-card__image">
            <img src="/Images/auralic.png" alt="Auralic Aries G2.1 Streamer" />
          </div>
          <h3 className="product-card__title">
            Auralic Aries G2.1 Streamer (Digital Output)
          </h3>
          <p className="product-card__price">£ 4,799.00</p>
          <Link to="/shop" className="product-card__btn">Read more</Link>
        </article>

        <article className="product-card">
          <div className="product-card__image">
            <img src="/Images/auralic.png" alt="Auralic Aries G2.1 Streamer" />
          </div>
          <h3 className="product-card__title">
            Auralic Aries G2.1 Streamer (Digital Output)
          </h3>
          <p className="product-card__price">£ 4,799.00</p>
          <Link to="/shop" className="product-card__btn">Read more</Link>
        </article>

      </div>
    </section>
  </>
);
// Nav baren til andre sider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo">
            <img src="/Images/logo.png" alt="HI-FI Logo" />
          </Link>

          <ul className="navbar__menu">
            <li className="navbar__item"><Link to="/shop" className="navbar__link">SHOP</Link></li>
            <li className="navbar__item"><Link to="/about-us" className="navbar__link">ABOUT US</Link></li>
            <li className="navbar__item"><Link to="/contact-us" className="navbar__link">CONTACT US</Link></li>
          </ul>

          <div className="navbar__icons">
            <div className="navbar__search-container">
              <input type="text" className="navbar__search" placeholder="Search product..." />
              <button className="navbar__search-btn">
                <img src="/Images/search.png" alt="Search" />
              </button>
            </div>

            <a href="#account" className="navbar__icon navbar__icon--profile">
              <img src="/Images/profile.png" alt="Profile" />
            </a>

            <a href="#cart" className="navbar__icon navbar__icon--cart">
              <img src="/Images/shoppingcart.png" alt="Shopping Cart" />
              <span className="navbar__badge">0</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ROUTES */}
      <Routes>
        {/* Forside */}
        <Route
          path="/"
          element={
            <>
              <div className="main-container">
                <App />
              </div>

              <HomePage />

              {/* Black box */}
              <section className="blackbox">
                <div className="blackbox__inner">
                  <div className="blackbox__column">
                    <h2 className="blackbox__title">What we do</h2>
                    <p className="blackbox__text">
                      We look forward to customising a system to meet your needs.<br /><br />
                      We don’t favour one manufacturer over another – the only thing we do
                      favour is making sure our customers get the right product that suits their
                      needs and listening preferences. We will ask many questions in order to
                      ensure that what you buy from us is tailored to you and you alone.<br /><br />
                      If you are looking for a product not found in our demonstration showrooms
                      or our online site, don’t fret as we have access to hundreds of brands.<br /><br />
                      One of our biggest pleasures of working in this industry is to see the
                      smile on our customers’ faces when they finally hear and see the system
                      of their dreams.
                    </p>
                  </div>

                  <div className="blackbox__column blackbox__column--right">
                    <h2 className="blackbox__title">Opening hours</h2>
                    <p className="blackbox__hours">
                      <strong>Edinburgh</strong><br />
                      2 Joppa Rd, Edinburgh, EH15 2EU<br />
                      Monday to Friday: 10:00am – 5:30pm<br />
                      Saturday: 10:00am – 5:30pm<br />
                      Sunday: Closed<br /><br />

                      <strong>Falkirk</strong><br />
                      44 Cow Wynd, Falkirk, FK1 1PU<br />
                      Monday to Friday: 10:00am – 5:30pm<br />
                      Saturday: By appointment only<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </section>

              {/* Newsletter under blackbox */}
              <section className="newsletter">
                <div className="newsletter__box">
                  <h2 className="newsletter__title">SIGN UP FOR OUR NEWSLETTER</h2>
                  <p className="newsletter__subtitle">
                    Subscribing to our newsletter secures you up to date information about HiFi Horizons latest updates and offers.
                  </p>

                  <div className="newsletter__form">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="newsletter__input"
                    />
                    <button className="newsletter__button">Sign up</button>
                  </div>
                </div>
              </section>

              {/* Footer */}
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
                    <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
                    <p>📞 0131 556 7901</p>
                    <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
                    <p>📞 01324 629 011</p>
                    <div className="footer__icons">
                      <a href="#"><img src="/Images/facebook.png" alt="Facebook" /></a>
                      <a href="#"><img src="/Images/twitter.png" alt="Twitter" /></a>
                      <a href="#"><img src="/Images/instagram.png" alt="Instagram" /></a>
                      <a href="#"><img src="/Images/youtube.png" alt="YouTube" /></a>
                    </div>
                  </div>
                </div>

                {/*-- Footer bottom --*/}
                <div className="footer__bottom">
                  <div className="payment-icons">
                    <img src="/Images/stripe.png" alt="Stripe" />
                    <img src="/Images/visa.png" alt="Visa" />
                    <img src="/Images/mastercard.png" alt="Mastercard" />
                  </div>
                  <div>
                    HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC049238. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU<br/>
                    Designed by WU07 :)
                  </div>
                </div>
              </footer>
            </>
          }
        />

        {/* router til andre sider */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  </StrictMode>
);
