import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../images/LOGO.png'; 
import logo2 from '../../images/LOGO_2.png'; 
import '../Layout/Layout.scss';

function Layout({ children }) {
  return (
    <div className="layout-container">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="nav">
          <Link to="/" className="link">Accueil</Link>
          <Link to="/about" className="link">A Propos</Link>
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
