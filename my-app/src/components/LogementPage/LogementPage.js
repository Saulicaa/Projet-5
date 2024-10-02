import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/logements.json';
import Slideshow from '../Slideshow/Slideshow';
import Collapse from '../Collapse/collapse';
import StarRating from '../StarRating/StarRating';
import '../LogementPage/LogementPage.scss';
import NotFound from '../NotFound/NotFound';

const LogementPage = () => {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return (
      <NotFound></NotFound>
    );
  }

  return (
    <div>
      <Slideshow images={logement.pictures} />
      <div className="info">
        <div className="oui">
          <div className="titre">
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>   
        <div className="non">
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} className="image-host" />
          </div>
          <div className="rating">
            <StarRating rating={logement.rating} />
          </div>
        </div>
      </div>
      <div className="collapse-group">
        <Collapse title="Description" className="collapse-logement">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Equipements" className="collapse-logement">
          {logement.equipments.map((equipment, index) => (
            <ul key={index}>{equipment}</ul>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default LogementPage;
