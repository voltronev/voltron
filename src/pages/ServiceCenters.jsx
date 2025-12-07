import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ServiceCenters.css';

const ServiceCenters = () => {
    const centers = [
        {
            city: 'Tirupati',
            address: '123 Temple Road, Near Bus Stand, Tirupati, Andhra Pradesh 517501',
            phone: '+91 98765 43210',
            mapLink: '#'
        },
        {
            city: 'Nellore',
            address: '456 Trunk Road, Gandhi Nagar, Nellore, Andhra Pradesh 524001',
            phone: '+91 98765 43211',
            mapLink: '#'
        },
        {
            city: 'Prakasam',
            address: '789 Ongole Main Road, Prakasam Dist, Andhra Pradesh 523001',
            phone: '+91 98765 43212',
            mapLink: '#'
        },
        {
            city: 'Kadapa',
            address: '321 Seven Roads Circle, Kadapa, Andhra Pradesh 516001',
            phone: '+91 98765 43213',
            mapLink: '#'
        }
    ];

    return (
        <div className="service-page">
            <Header />
            <main className="service-main">
                <section className="service-hero">
                    <div className="container">
                        <h1 className="section-title">Service <span className="highlight">Centers</span></h1>
                        <p className="service-intro">
                            Find an authorized Voltron service center near you. Expert care for your electric vehicle.
                        </p>
                    </div>
                </section>

                <section className="service-list-section">
                    <div className="container">
                        <div className="service-grid">
                            {centers.map((center, index) => (
                                <div key={index} className="service-card">
                                    <div className="city-badge">{center.city}</div>
                                    <h3>Voltron Service {center.city}</h3>
                                    <p className="address">{center.address}</p>
                                    <p className="phone">Phone: <a href={`tel:${center.phone}`}>{center.phone}</a></p>
                                    <a href={center.mapLink} className="btn btn-outline-sm map-btn">View on Map</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ServiceCenters;
