import React, { useState } from 'react';
import './ProductShowcase.css';
import hammerImg from '../assets/hammer.png';
import thunderImg from '../assets/scooter2.jpg';

const ProductShowcase = () => {
    const [activeVehicle, setActiveVehicle] = useState('hammer');

    const vehicles = {
        hammer: {
            name: 'Hammer',
            image: hammerImg,
            features: [
                { title: 'Heavy Duty Payload', desc: 'Built for strength with a massive 300kg payload capacity for all your needs.' },
                { title: 'Smart Connectivity', desc: 'Seamless integration with Bluetooth and Wi-Fi connectivity.' },
                { title: 'Dual Range Modes', desc: '70-80km in Load Mode, extending to 100-120km in Eco Mode.' },
                { title: 'Advanced Control', desc: 'Features Cruise Control and Parking Mode for effortless riding experience.' }
            ],
            specs: [
                { label: 'Motor Power', value: '1500W Mid Drive' },
                { label: 'Battery Pack', value: '2.8 kWh' },
                { label: 'Top Speed', value: '50-60 km/h' },
                { label: 'Charging Time', value: '2 Hours (Inbuilt)' },
                { label: 'Warranty', value: '2 Years (Motor/Battery)' },
                { label: 'Service', value: '1 Year General' }
            ]
        },
        thunder: {
            name: 'Thunder',
            image: thunderImg,
            features: [
                { title: 'Heavy Duty Payload', desc: 'Built for strength with a massive 300kg payload capacity for all your needs.' },
                { title: 'Smart Connectivity', desc: 'Seamless integration with Bluetooth and Wi-Fi connectivity.' },
                { title: 'Dual Range Modes', desc: '70-80km in Load Mode, extending to 100-120km in Eco Mode.' },
                { title: 'Advanced Control', desc: 'Features Cruise Control and Parking Mode for effortless riding experience.' }
            ],
            specs: [
                { label: 'Motor Power', value: '1500W Mid Drive' },
                { label: 'Battery Pack', value: '2.8 kWh' },
                { label: 'Top Speed', value: '50-60 km/h' },
                { label: 'Charging Time', value: '2 Hours (Inbuilt)' },
                { label: 'Warranty', value: '2 Years (Motor/Battery)' },
                { label: 'Service', value: '1 Year General' }
            ]
        }
    };

    const currentVehicle = vehicles[activeVehicle];

    return (
        <section className="product-showcase" id="products">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Meet The <span className="highlight">Fleet</span></h2>
                    <div className="vehicle-tabs">
                        <button
                            className={`tab-btn ${activeVehicle === 'hammer' ? 'active' : ''}`}
                            onClick={() => setActiveVehicle('hammer')}
                        >
                            Hammer
                        </button>
                        <button
                            className={`tab-btn ${activeVehicle === 'thunder' ? 'active' : ''}`}
                            onClick={() => setActiveVehicle('thunder')}
                        >
                            Thunder
                        </button>
                    </div>
                </div>

                <div className="vehicle-display">
                    <div className="vehicle-image-container">
                        <img src={currentVehicle.image} alt={currentVehicle.name} className="vehicle-image" />
                    </div>

                    <div className="vehicle-info">
                        <h3 className="vehicle-name">{currentVehicle.name}</h3>
                        <div className="features-grid">
                            {currentVehicle.features.map((feature, index) => (
                                <div key={index} className="feature-card">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="specs-container">
                    <h3 className="specs-title">Specifications</h3>
                    {currentVehicle.specs.map((spec, index) => (
                        <div key={index} className="spec-row">
                            <span className="spec-label">{spec.label}</span>
                            <span className="spec-value">{spec.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
