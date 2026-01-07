import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './MassalkhiWebsite.jsx'
import './index.css'  // ← CRITICAL: This must be here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)