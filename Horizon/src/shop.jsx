"use client"
import { Link } from "react-router-dom";
import { useState } from "react"
import "./sass/shop.scss"
import { FaCodeCompare } from "react-icons/fa6";
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

export default function Shop() {
  const [selectedBrand, setSelectedBrand] = useState("Apple")
  const [expandedSections, setExpandedSections] = useState({
    brand: true,
    color: true,
    price: false,
  })

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Auralic Aries G2.1 Streamer",
      subtitle: "(Digital Output)",
      price: "4,799.00",
      stock: "in",
      stockText: "In stock",
    },
    {
      id: 2,
      name: "Auralic Aries G2.1 Streamer",
      subtitle: "(Digital Output)",
      price: "4,799.00",
      stock: "in",
      stockText: "In stock",
    },
    {
      id: 3,
      name: "Auralic Aries G2.1 Streamer",
      subtitle: "(Digital Output)",
      price: "4,799.00",
      stock: "in",
      stockText: "In stock",
    },
    {
      id: 4,
      name: "Auralic Aries G2.1 Streamer",
      subtitle: "(Digital Output)",
      price: "4,799.00",
      stock: "in",
      stockText: "In stock",
    },
    {
      id: 5,
      name: "Auralic Aries G2.1 Streamer",
      subtitle: "(Digital Output)",
      price: "4,799.00",
      stock: "out",
      stockText: "Out of stock",
    },
    {
      id: 6,
      name: "Auralic Aries G2.1 Streamer",
      subtitle: "(Digital Output)",
      price: "4,799.00",
      stock: "in",
      stockText: "In stock",
    },
    {
      id: 7,
      name: "Auralic Aries G2.1 Streamer",
      subtitle: "(Digital Output)",
      price: "4,799.00",
      stock: "in",
      stockText: "In stock",
    },
    {
      id: 8,
      name: "Auralic Aries G2.1 Streamer",
      subtitle: "(Digital Output)",
      price: "4,799.00",
      stock: "few",
      stockText: "Few in stock",
    },
    {
      id: 9,
      name: "Auralic Aries G2.1 Streamer",
      subtitle: "(Digital Output)",
      price: "4,799.00",
      stock: "in",
      stockText: "In stock",
    },
  ]

  return (
    <>
    <div className="shop">
      <h1 className="shop__title">PRODUCTS</h1>

      <div className="shop__container">
        {/* Sidebar Filters */}
        <aside className="shop__sidebar">
          <div className="shop__filter-section">
            <h3 className="shop__filter-label">Sort by</h3>
          </div>

          <div className="shop__filter-section">
            <button className="shop__filter-header" onClick={() => toggleSection("brand")}>
              <span>Brand</span>
              <span className={`shop__filter-icon ${expandedSections.brand ? "shop__filter-icon--open" : ""}`}>^</span>
            </button>
            {expandedSections.brand && (
              <div className="shop__filter-options">
                <label className="shop__filter-option">
                  <input type="checkbox" />
                  <span>Steelseries</span>
                </label>
                <label className="shop__filter-option">
                  <input type="checkbox" />
                  <span>Logitech</span>
                </label>
                <label className="shop__filter-option">
                  <input type="checkbox" checked onChange={() => {}} />
                  <span>Apple</span>
                  <span className="shop__filter-check">✓</span>
                </label>
              </div>
            )}
          </div>

          <div className="shop__filter-section">
            <button className="shop__filter-header" onClick={() => toggleSection("color")}>
              <span>Color</span>
              <span className={`shop__filter-icon ${expandedSections.color ? "shop__filter-icon--open" : ""}`}>^</span>
            </button>
            {expandedSections.color && (
              <div className="shop__filter-options">
                <label className="shop__filter-option">
                  <input type="checkbox" />
                  <span>White</span>
                </label>
                <label className="shop__filter-option">
                  <input type="checkbox" />
                  <span>Black</span>
                </label>
                <label className="shop__filter-option">
                  <input type="checkbox" />
                  <span>Grey</span>
                </label>
              </div>
            )}
          </div>

          <div className="shop__filter-section">
            <button className="shop__filter-header" onClick={() => toggleSection("price")}>
              <span>Price</span>
              <span className={`shop__filter-icon ${expandedSections.price ? "shop__filter-icon--open" : ""}`}>^</span>
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="shop__main">
          <div className="shop__grid">
            {products.map((product) => (
              <div key={product.id} className="shop__product-card">
                <div className="shop__compare">
                  <span>Compare</span>
                   <button className="shop__compare-icon">
                      <FaCodeCompare size={26} />
                    </button>
                </div>


                <div className="shop__product-image">
                  <img src="/Images/auralic.png" alt={product.name} />
                </div>

                <h3 className="shop__product-name">{product.name}</h3>
                <p className="shop__product-subtitle">{product.subtitle}</p>

                <p className="shop__product-price">£ {product.price}</p>

                <div className="shop__product-footer">
                  <Link 
                    to={`/product/${product.id}`} 
                     className="shop__add-to-cart"
                      >
                      Add to cart
                  </Link>
                  <div className={`shop__stock shop__stock--${product.stock}`}>
                    <span>{product.stockText}</span>
                    <span className="shop__stock-indicator"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
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
