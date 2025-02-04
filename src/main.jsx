import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from "./components/Navbar.jsx";
import { Link } from 'react-router-dom';
import QrPopUp from "./components/QrPopUp.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />
      <QrPopUp />

  </StrictMode>,
)
