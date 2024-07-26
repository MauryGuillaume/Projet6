import React from 'react';
import { NavLink } from "react-router-dom";
import "../style/components/error.scss";

const ContentError = () => {
    return (
        <div className='error'>
            <h1 className='error-title'>404</h1>
            <p className='oops'>
                Oups! La page que vous demandez n'existe pas
            </p>
            <NavLink to="/">
                <li className='accueil-nav'>Retourner sur la page d'accueil</li>
            </NavLink>
        </div>
    );
};

export default ContentError;