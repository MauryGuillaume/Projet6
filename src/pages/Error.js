import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import ContentError from '../components/error/ContentError';

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