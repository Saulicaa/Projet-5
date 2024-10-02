import React from 'react';
import '../NotFound/NotFound.scss';
import { Link } from 'react-router-dom'; 

function NotFound() {
  return (
    <div className="NotFound">
      <div className="error">404</div>
      <div className="oups">Oups! La page que vous demandez n'existe pas.</div>
      <Link to="/" className="retour">Retourner sur la page d'accueil</Link>
    </div>
  )   
}

export default NotFound;
