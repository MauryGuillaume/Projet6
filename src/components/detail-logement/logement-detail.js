import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./logement-detail.scss";
import Carousel from '../carousel/carousel';
import StarRating from '../star-rating/star-rating';
import Collapse from '../collapse/collapse';

const DetailLogement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const selectedLogement = data.find(item => item.id === id);
        if (selectedLogement) {
          setLogement(selectedLogement);
        } else {
          navigate('/error');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        navigate('/error');
      });
  }, [id, navigate]);

  if (!logement) {
    return <div>Loading...</div>;
  }

  return (
    <div className="logement-detail">
      <Carousel images={logement.pictures} />
      <div className="logement-info">
        <div className='first-column'>
          <h1>{logement.title}</h1>
          <div className="location">{logement.location}</div>
          <div className="tags">
            <ul>
              {logement.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        

        <div className='second-column'>
          <div className="host-info">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
          </div>
          <div className="rating">
            <StarRating rating={parseFloat(logement.rating)} />
          </div>
        </div>
      </div>
        
        
      <div className='collapse-details'>
        <div className="equipments">
          <Collapse title="Equipements">
            <ul>
              {logement.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Collapse>
          
        </div>

        <div className="description">
          <Collapse title="Description">
              <p>{logement.description}</p>
          </Collapse>
        </div>
      </div>
       
      
    </div>
  );
};

export default DetailLogement;
