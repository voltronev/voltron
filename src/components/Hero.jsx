import React from 'react';
import './Hero.css';
import brandImg from '../assets/hero-brand.jpg';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Ride the <span className="highlight">Future</span> With Us
                    </h1>
                    <p className="hero-subtitle">
                        <strong>Voltron</strong> is pioneering the electric revolution. We engineer sustainable, high-performance vehicles that redefine urban mobility for a cleaner planet.
                    </p>
                    <div className="hero-cta">
                        <a href="#products" className="btn btn-primary">Discover Models</a>
                        <a href="/payment" className="btn btn-outline">Book a Test Ride</a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-value">120<small>km</small></span>
                            <span className="stat-label">Range (Eco)</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">60<small>km/h</small></span>
                            <span className="stat-label">Top Speed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">2<small>h</small></span>
                            <span className="stat-label">Charging</span>
                        </div>
                    </div>
                </div>
                <div className="hero-image-container">
                    <div className="glow-effect"></div>
                    <img src={brandImg} alt="Voltron Electric Vehicle" className="hero-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
