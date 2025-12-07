import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2 className="logo">VOLTRON</h2>
                        <p>Electrifying the future of mobility.</p>
                    </div>

                    <div className="footer-links">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#">Contact</a></li>
                            <li><a href="/service-centers">Service Centers</a></li>
                            <li><a href="#">Warranty</a></li>
                            <li><a href="tel:+919553276545">+91 9553276545</a></li>
                            <li><a href="mailto:solarajesh45@gmail.com">solarajesh45@gmail.com</a></li>
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h3>Stay Updated</h3>
                        <p>Subscribe to our newsletter for the latest updates.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Enter your email" />
                            <button type="button" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Voltron Mobility. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
