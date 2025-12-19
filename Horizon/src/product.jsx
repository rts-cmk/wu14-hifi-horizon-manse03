"use client"
import { Link } from 'react-router-dom';
import { useState } from "react"
import "./sass/product.scss"

import { 
  FaStripe, 
  FaCcVisa, 
  FaCcMastercard 
} from "react-icons/fa";
import { 
  FaFacebookSquare, 
  FaInstagramSquare, 
  FaTwitterSquare, 
  FaYoutubeSquare, 
  FaPhone 
} from "react-icons/fa";

export default function Product() {
  const [selectedColor, setSelectedColor] = useState("black")
  const [quantity, setQuantity] = useState(1)
  const [currentImage, setCurrentImage] = useState(0)

  const colors = [
    { id: "black", name: "Black", value: "#000000" },
    { id: "silver", name: "Silver", value: "#C0C0C0" },
    { id: "gold", name: "Gold", value: "#D4AF37" },
  ]

  const images = [
    "/Images/auralic.png",
    "/Images/auralic.png",
    "/Images/auralic.png",
  ]

  const handleAddToCart = () => {
    console.log("Add to cart:", {
      product: "Auralic Aries G2.1",
      color: selectedColor,
      quantity,
    })
  }

  return (
    <div className="product-page">
      {/* HEADER */}
      <div className="product-header">
        <h1 className="product-title">PRODUCT</h1>
        <button className="compare-btn">
          Compare
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M8 3v10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className="product-container">
        {/* IMAGE SECTION */}
        <div className="product-image-section">
          <div className="image-wrapper">
            <img
              src="/Images/auralic.png"
              alt="Auralic Aries G2.1"
              className="product-image"
            />
          </div>

          <div className="image-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentImage === index ? "active" : ""}`}
                onClick={() => setCurrentImage(index)}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="product-details-section">
          <h2 className="product-name">Auralic Aries G2.1 Streamer</h2>
          <h3 className="product-subtitle">(Digital Output)</h3>

          <div className="product-description">
            <p>
              G2.1 is the next logical evolutionary step, resulting from a desire to <br />
              improve upon the original G2 series. At AURALiC, we always work to create <br />
              a new approach to digital music that pushes the boundaries of sonic <br />
              quality. Incorporating state-of-the-art technologies and delivered with <br />
              innovative features, G2.1 is built for ultimate levels of sonic performance
            </p>
            <p>
              Every G2.1 series component, including the ARIES G2.1, sports an all-new <br />
              industrial design that’s engineered to set a new standard for sound <br />
              quality, enhance the user experience, and look every bit as good as it <br />
              sounds with its contemporary aesthetic. Offering features like a copper <br />
              enclosure, a high-mass base, and an enhanced suspension system <br />
              optimizes the sound of the ARIES G2.1 and ensures it is the most capable <br />
              and feature-rich way to introduce streaming to your audio system that <br />
              we’ve ever created.
            </p>
          </div>

          {/* COLOR SELECTOR */}
          <div className="color-selector">
            {colors.map((color) => (
              <button
                key={color.id}
                className={`color-option ${
                  selectedColor === color.id ? "selected" : ""
                }`}
                onClick={() => setSelectedColor(color.id)}
              >
                <span
                  className="color-swatch"
                  style={{ backgroundColor: color.value }}
                />
                <span className="color-name">{color.name}</span>
              </button>
            ))}
          </div>

          {/* PRICE */}
          <div className="price-stock">
            <div className="price">£ 4,799.00</div>
            <div className="stock-indicator">
              In stock <span className="stock-dot" />
            </div>
          </div>

          {/* PURCHASE */}
          <div className="purchase-controls">
            <div className="quantity-selector">
              <button
                className="quantity-btn"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>

              <input
                type="number"
                className="quantity-input"
                value={quantity}
                min="1"
                onChange={(e) =>
                  setQuantity(Math.max(1, Number(e.target.value) || 1))
                }
              />

              <button
                className="quantity-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to cart
            </button>
            
          </div>
        </div>



      </div>
              <h2 className="product-specs__title">PRODUCT SPECIFICATIONS</h2>

        <div className="info-grid">
          
  <div className="info-box gray">xxxxxxx</div>
  <div className="info-box gray">xxxxxxx</div>

  <div className="info-box white">xxxxxxx</div>
  <div className="info-box white">xxxxxxx</div>

  <div className="info-box gray">xxxxxxx</div>
  <div className="info-box gray">xxxxxxx</div>

  <div className="info-box white">xxxxxxx</div>
  <div className="info-box white">xxxxxxx</div>

    <div className="info-box gray">xxxxxxx</div>
  <div className="info-box gray">xxxxxxx</div>

  <div className="info-box white">xxxxxxx</div>
  <div className="info-box white">xxxxxxx</div>

    <div className="info-box gray">xxxxxxx</div>
  <div className="info-box gray">xxxxxxx</div>

  <div className="info-box white">xxxxxxx</div>
  <div className="info-box white">xxxxxxx</div>

    <div className="info-box gray">xxxxxxx</div>
  <div className="info-box gray">xxxxxxx</div>

  <div className="info-box white">xxxxxxx</div>
  <div className="info-box white">xxxxxxx</div>

    <div className="info-box gray">xxxxxxx</div>
  <div className="info-box gray">xxxxxxx</div>

  <div className="info-box white">xxxxxxx</div>
  <div className="info-box white">xxxxxxx</div>

    <div className="info-box gray">xxxxxxx</div>
  <div className="info-box gray">xxxxxxx</div>

  <div className="info-box white">xxxxxxx</div>
  <div className="info-box white">xxxxxxx</div>

    <div className="info-box gray">xxxxxxx</div>
  <div className="info-box gray">xxxxxxx</div>

  <div className="info-box white">xxxxxxx</div>
  <div className="info-box white">xxxxxxx</div>

    <div className="info-box gray">xxxxxxx</div>
  <div className="info-box gray">xxxxxxx</div>

  <div className="info-box white">xxxxxxx</div>
  <div className="info-box white">xxxxxxx</div>

    <div className="info-box gray">xxxxxxx</div>
  <div className="info-box gray">xxxxxxx</div>

  <div className="info-box white">xxxxxxx</div>
  <div className="info-box white">xxxxxxx</div>

    <div className="info-box gray">xxxxxxx</div>
  <div className="info-box gray">xxxxxxx</div>

  <div className="info-box white">xxxxxxx</div>
  <div className="info-box white">xxxxxxx</div>

  <div className="info-box gray">xxxxxxx</div>
  <div className="info-box gray">xxxxxxx</div>

        </div>

        {/* COMPARE BAR */}
{/* <div className="compare-bar">
  <div className="compare-item">
    <img src="/Images/auralic.png" alt="Auralic Aries G2.1" />
    <div className="compare-info">
      <p className="compare-name">Auralic Aries G2.1 Streamer</p>
      <p className="compare-subtitle">(Digital Output)</p>
      <p className="compare-price">£ 4,799.00</p>
    </div>
  </div>
  <button className="compare-action">Compare</button>
  <p className="compare-limit">You can compare up to 3 products</p>
</div> */}



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
    </div>



  )
}
