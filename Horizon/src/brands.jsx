import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './sass/index.css'
import './sass/brand.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="main-container">
      <h1>HI-FI</h1>
      <p>Test</p>
      <App />
    </div>
  </StrictMode>,
)
