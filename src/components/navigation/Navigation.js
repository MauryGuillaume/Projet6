import React from 'react';
import { NavLink } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink to="/">
                <img src="/images/LOGO.png" alt="logo" />
            </NavLink>

            <ul className='navigation-option'>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='accueil-nav'>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='about-nav'>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;