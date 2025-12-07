import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div className="welcome-page">
            <div className="welcome-overlay"></div>
            <div className="welcome-content">
                <h1 className="welcome-logo">VOLTRON</h1>
                <p className="welcome-tagline">Electrifying the Future</p>
                <button className="btn btn-primary welcome-btn" onClick={() => navigate('/home')}>
                    Enter Experience
                </button>
            </div>
        </div>
    );
};

export default Welcome;
