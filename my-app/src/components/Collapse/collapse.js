import React, { useState } from 'react';
import '../Collapse/collapse.scss';
import arrow from '../../images/arrow_collapse.png';

function Collapse({ title, children, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className={`collapse ${isOpen ? 'open' : ''} ${className}`}>
        <div className="collapse-header" onClick={toggleCollapse}>
          <h3>{title}</h3>
          <img 
            src={arrow} 
            alt="Toggle collapse" 
            className="collapse-icon"
          />
        </div>
        <div className="collapse-content">
          {children}
        </div>
      </div>
  );
}

export default Collapse;
