import React, { useState } from 'react';
import './collapse.scss';
import arrowImage from './Vector.png';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={toggleCollapse}>
        <span><strong>{title}</strong></span>
        <img 
          src={arrowImage} 
          alt="Flèche" 
          className={`collapse-arrow ${isOpen ? 'open' : ''}`} 
        />
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
