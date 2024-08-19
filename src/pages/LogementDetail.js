import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import DetailLogement from '../components/detail-logement/logement-detail';

const LogementDetail = () => {
    return (
        <div>
            <Navigation />

            <DetailLogement />

            <Footer />
        </div>
    );
};

export default LogementDetail;