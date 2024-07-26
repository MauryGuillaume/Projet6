import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContentError from '../components/ContentError';

const Error = () => {
    return (
        <div>
            <Navigation />

            <ContentError />

            <Footer />
        </div>
    );
};

export default Error;