import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Payment.css';

const Payment = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        model: 'Hammer',
        address: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate payment processing
        setTimeout(() => {
            setSubmitted(true);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="payment-page">
                <Header />
                <main className="payment-main">
                    <div className="container">
                        <div className="success-message">
                            <div className="success-icon">✓</div>
                            <h1>Order Confirmed!</h1>
                            <p>Thank you for your pre-order, {formData.name}.</p>
                            <p>We have sent a confirmation email to {formData.email}.</p>
                            <p>Our team will contact you shortly regarding the next steps.</p>
                            <a href="/home" className="btn btn-primary">Return Home</a>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="payment-page">
            <Header />
            <main className="payment-main">
                <div className="container">
                    <h1 className="section-title text-center">Pre-order <span className="highlight">Now</span></h1>
                    <div className="payment-container">
                        <form className="payment-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div className="form-group">
                                <label>Select Model</label>
                                <select
                                    name="model"
                                    value={formData.model}
                                    onChange={handleChange}
                                >
                                    <option value="Hammer">Voltron Hammer</option>
                                    <option value="Thunder">Voltron Thunder</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Delivery Address</label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full address"
                                    rows="3"
                                ></textarea>
                            </div>

                            <div className="order-summary">
                                <h3>Order Summary</h3>
                                <div className="summary-row">
                                    <span>Booking Amount</span>
                                    <span>₹1,000</span>
                                </div>
                                <p className="summary-note">*Fully refundable</p>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">
                                Confirm Order & Pay
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Payment;
