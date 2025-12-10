import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './sass/index.css';
import './sass/main.scss';
import App from './App.jsx';
import Shop from './shop.jsx';
import AboutUs from './about-us.jsx';
import ContactUs from './contact-us.jsx';

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
          <h3 className="product-card__title">Auralic Aries G2.1 Streamer (Digital Output)</h3>
          <p className="product-card__price">£ 4,799.00</p>
          <button className="product-card__btn">Read more</button>
        </article>

        <article className="product-card">
          <div className="product-card__image">
            <img src="/Images/auralic.png" alt="Auralic Aries G2.1 Streamer" />
          </div>
          <h3 className="product-card__title">Auralic Aries G2.1 Streamer (Digital Output)</h3>
          <p className="product-card__price">£ 4,799.00</p>
          <button className="product-card__btn">Read more</button>
        </article>

        <article className="product-card">
          <div className="product-card__image">
            <img src="/Images/auralic.png" alt="Auralic Aries G2.1 Streamer" />
          </div>
          <h3 className="product-card__title">Auralic Aries G2.1 Streamer (Digital Output)</h3>
          <p className="product-card__price">£ 4,799.00</p>
          <button className="product-card__btn">Read more</button>
        </article>

        <article className="product-card">
          <div className="product-card__image">
            <img src="/Images/auralic.png" alt="Auralic Aries G2.1 Streamer" />
          </div>
          <h3 className="product-card__title">Auralic Aries G2.1 Streamer (Digital Output)</h3>
          <p className="product-card__price">£ 4,799.00</p>
          <Link to="/shop" className="product-card__btn">Read more</Link>
        </article>
      </div>
    </section>
  </>
);

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
      
      <Routes>
        <Route path="/" element={
          <>
            <div className="main-container">
              <App />
            </div>
            <HomePage />
          </>
        } />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

        <section className="blackbox">
          <div className="blackbox__inner">
          <h2 className="blackbox__title">What we do</h2>
          <h2 className="blackbox_title2">Opening hours</h2>
          <p className="blackbox__text">
            We look forward to customising a system to meet your needs. <br /> <br />
            We don’t favour one manufacturer over another – the only thing we do <br /> favour is making sure our customers get the right product that suits their <br /> needs
            and listening preferences. We will ask many questions in order to <br /> ensure that what you buy from us is tailored to you and you alone. <br /> <br />

            If you are looking for a product not found in our demonstration showrooms <br /> or our online site, don’t fret as we have access to hundreds of brands. <br /> <br />

            One of our biggest pleasures of working in this industry is to see the smile on <br /> our customers’ faces when they finally hear and see the system of their <br /> dreams.
          </p>
          
          <p className="blackbox_text2">dsasdasdasd</p>
        </div>
      </section>

    </Router>
  </StrictMode>
);



