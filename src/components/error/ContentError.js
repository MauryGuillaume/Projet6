import React from 'react';
import { NavLink } from "react-router-dom";
import "./error.scss";

const ContentError = () => {
    return (
        <div className='error'>
            <p className='error-title'>404</p>
            <p className='oops'>
                Oups! La page que vous demandez n'existe pas
            </p>
            <NavLink to="/" className='retour-accueil'>
                Retourner sur la page d'accueil
            </NavLink>
        </div>
    );
};

export default ContentError;