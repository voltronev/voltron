import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <Header />
            <main className="about-main">
                <section className="about-hero">
                    <div className="container">
                        <h1 className="section-title">About <span className="highlight">Voltron</span></h1>
                        <p className="about-intro">
                            Revolutionizing urban mobility with sustainable, high-performance electric vehicles.
                        </p>
                    </div>
                </section>

                <section className="about-section">
                    <div className="container">
                        <div className="about-grid">
                            <div className="about-card">
                                <h2>Our Vision</h2>
                                <p>
                                    To create a cleaner, greener future where mobility is efficient, exciting, and accessible to all.
                                    We envision a world powered by sustainable energy, where every journey contributes to a healthier planet.
                                </p>
                            </div>
                            <div className="about-card">
                                <h2>Our Mission</h2>
                                <p>
                                    To engineer state-of-the-art electric vehicles that combine cutting-edge technology with premium design.
                                    We are committed to pushing the boundaries of what's possible in electric mobility.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-section leadership-section">
                    <div className="container">
                        <h2 className="section-title">Leadership</h2>
                        <div className="leadership-grid">
                            <div className="leader-card">
                                <div className="leader-avatar"></div>
                                <h3>Founder Name</h3>
                                <span className="leader-role">Founder</span>
                                <p>
                                    A visionary entrepreneur with a passion for sustainable technology and automotive innovation.
                                </p>
                            </div>
                            <div className="leader-card">
                                <div className="leader-avatar"></div>
                                <h3>CEO Name</h3>
                                <span className="leader-role">Chief Executive Officer</span>
                                <p>
                                    Leading Voltron with strategic expertise and a commitment to operational excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;
