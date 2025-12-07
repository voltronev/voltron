import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <main>
                <Hero />
                <ProductShowcase />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
