import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MobileApp from './MobileApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MobileApp/>
  </StrictMode>,
)
