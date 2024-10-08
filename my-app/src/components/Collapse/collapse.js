import React, { useState } from 'react';
import '../Collapse/collapse.scss';
import arrow from '../../images/arrow_collapse.png';

function Collapse({ title, children, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  let openClass = '';
  let rotateClass = '';
  let showClass = '';
  if (isOpen === true) {
      openClass = 'open';
      rotateClass = 'rotate';
      showClass = 'show';
  }
  return (
      <div className={`collapse ${openClass} ${className}`}>
        <div className="collapse-header" onClick={toggleCollapse}>
          <h3>{title}</h3>
          <img 
            src={arrow} 
            alt="Toggle collapse" 
            className={`collapse-icon ${rotateClass}`} 
          />
        </div>
        <div className={`collapse-content ${showClass}`}>
          {children}
        </div>
      </div>
    );
}

export default Collapse;