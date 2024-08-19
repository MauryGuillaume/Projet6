import React, { useEffect, useState } from 'react';
import "./case-accueil.scss";
import { useNavigate } from 'react-router-dom';

const Cases = () => {
  const [cases, setCases] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setCases(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleClick = (id) => {
    navigate(`/page/${id}`);
  };

  return (
    <div className="cases-wrapper">
      <div className="cases-background">
        <div className="cases-container">
          {cases.map((item) => (
            <div
              key={item.id}
              className="case"
              style={{ backgroundImage: `url(${item.cover})` }}
              onClick={() => handleClick(item.id)}
            >
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cases;
