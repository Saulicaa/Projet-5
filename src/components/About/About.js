import React from 'react';
import '../About/About.scss'
import Collapse from '../Collapse/collapse';
import Banner from '../Banner/Banner';
import bannerImage from '../../images/Banner_2.png';
function About() {
  return (
    <div className ="about">
      <Banner
        title=""
        backgroundImage={bannerImage}
      />
      <div className="collapse_group">
        <Collapse title="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </Collapse>
        <Collapse title="Respect">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse >
        <Collapse title="Service">
          <p>La qualité du service est au coeur de note engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
        </Collapse>
        <Collapse title="Sécurité"> 
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes</p>
        </Collapse>
      </div>
    </div>
    
  );
}

export default About;
