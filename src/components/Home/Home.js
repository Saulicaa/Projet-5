import React from 'react';
import '../Home/home.scss';
import Banner from '../Banner/Banner';
import bannerImage from '../../images/Banner.png';
import Card from '../Card/Card';
import data from '../../data/logements.json';

function Home() {
  return (
    <div className='home'>
      <Banner 
        title="Chez vous, partout et ailleurs" 
        backgroundImage={bannerImage}
      />
      <div className="cards-container">
        {data.map((logement) => (
          <Card 
            key={logement.id}
            title={logement.title} 
            imageUrl={logement.cover} 
            link={`/logement/${logement.id}`}  
          />
        ))}
      </div>
    </div>
  );
}

export default Home;