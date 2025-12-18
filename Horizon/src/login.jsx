import { Link } from "react-router-dom";
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
import './sass/login.scss';

const Login = () => {
  return (
    <>
      <section className="login-page">
        <h1 className="login-page__title">LOGIN</h1>

        <div className="login-page__grid">
          <div className="login-box">
            <h2 className="login-box__title">REGISTERED CUSTOMERS</h2>
            <p className="login-box__subtitle">
              If you have an account, sign in with your email address.
            </p>

            <form className="login-form">
              <label>
                <span className="login-form__label-text">
                  Email <span className="required">*</span>
                </span>
                <input type="email" />
              </label>

              <label>
                <span className="login-form__label-text">
                  Password <span className="required">*</span>
                </span>
                <input type="password" />
              </label>

              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button type="submit" className="login-form__btn">
                Sign in
              </button>

              <Link to="/account" className="login-form__forgot">
                Forgot your Password?
              </Link>
            </form>
          </div>

          <div className="login-box login-box--center">
            <h2 className="login-box__title">NEW CUSTOMER</h2>
            <p className="login-box__subtitle">
              Creating an account has many benefits.
            </p>
            <Link to="/account" className="login-box__create-btn">
              Create an Account
            </Link>
          </div>
        </div>
      </section>

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

export default Login;
