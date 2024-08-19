import React from 'react';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import ImgBandeau from '../components/bandeau-image/image-bandeau';
import Cases from '../components/case-accueil/case-accueil';

const Home = () => {
    return (
        <div>
            <Navigation />
            
            <ImgBandeau 
                src="../images/img-home.png"
                alt="Paysage"
                title="Chez vous, partout et ailleurs"
            />

            <Cases />



            <Footer />
        </div>
    );
};

export default Home;