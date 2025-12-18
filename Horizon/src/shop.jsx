import './sass/shop.scss';

const products = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  name: 'Auralic Aries G2.1 Streamer',
  subtitle: '(Digital Output)',
  price: '£ 4,799.00',
  status: i === 4 ? 'out' : i === 7 ? 'few' : 'in'
}));

export default function Shop() {
  return (
    <div className="shop-layout">
      {/* FILTER SIDEBAR */}
      <aside className="shop-filter">
        <h3>Sort by</h3>

        <div className="filter-group">
          <div className="filter-title">Brand</div>
          <label><input type="radio" name="brand" /> Steelseries</label>
          <label><input type="radio" name="brand" defaultChecked /> Logitech</label>
          <label><input type="radio" name="brand" /> Apple</label>
        </div>

        <div className="filter-group">
          <div className="filter-title">Color</div>
          <label><input type="radio" name="color" /> White</label>
          <label><input type="radio" name="color" /> Black</label>
          <label><input type="radio" name="color" /> Grey</label>
        </div>

        <div className="filter-group">
          <div className="filter-title">Price</div>
        </div>
      </aside>

      {/* PRODUCT GRID */}
      <div className="shop-grid">
        {products.map(p => (
          <div className="product-card" key={p.id}>
            <div className="compare">Compare <span className="icon">≡</span></div>

            <div className="image-wrapper">
              <img src="/Images/auralic.png" alt={p.name} />
            </div>

            <h3>{p.name}</h3>
            <p className="subtitle">{p.subtitle}</p>
            <p className="price">{p.price}</p>

            <div className="bottom">
              <button>Add to cart</button>
              <span className={`stock ${p.status}`}>
                {p.status === 'in' && 'In stock'}
                {p.status === 'few' && 'Few in stock'}
                {p.status === 'out' && 'Out of stock'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}