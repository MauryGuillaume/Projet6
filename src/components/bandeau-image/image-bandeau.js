import React from 'react';
import "./image-bandeau.scss";

const ImgBandeau = ({ src, alt, title }) => {
    return (
        <div className='content-about'>
            <div className="img-container">
                <img src={src} alt={alt} className='img-about-paysage' />
                <h1>{title}</h1>
            </div>
            
        </div>
    );
};

export default ImgBandeau;