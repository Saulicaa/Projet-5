import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import logo from '../../images/LOGO.png'; 
import logo2 from '../../images/LOGO_2.png'; 
import '../Layout/Layout.scss';

function Layout({ children }) {
const location = useLocation();

  return (
    <div className="layout-container">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="nav">
          <Link to="/" className={`link ${location.pathname === "/" ? "active" : ""}`}>Accueil</Link>
          <Link to="/about" className={`link ${location.pathname === "/about" ? "active" : ""}`}>A Propos</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <img src={logo2} alt="Logo" className="logo" />
        <p>&copy; 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
}

export default Layout;
