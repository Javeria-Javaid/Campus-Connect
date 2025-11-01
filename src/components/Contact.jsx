import './Contact.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                {/* Header */}
                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="contact-title">Let's Build Something Together</h2>
                    <p className="contact-subtitle">
                        Questions, collaborations, or ideas — we'd love to hear from you.
                    </p>
                </motion.div>

                <div className="contact-content">
                    {/* Left Column - Contact Info */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="info-title">Get in Touch</h3>
                        <p className="info-description">
                            Ready to transform your campus experience? Reach out and let's start the conversation.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div className="contact-text">
                                    <h4>Visit Our Campus Hub</h4>
                                    <p>University Innovation Center<br />CampusConnect Headquarters</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div className="contact-text">
                                    <h4>Email Us</h4>
                                    <p>hello@campusconnect.com</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">☎️</div>
                                <div className="contact-text">
                                    <h4>Call Us</h4>
                                    <p>+1 (555) 123-CCONNECT</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <h4>Follow Our Journey</h4>
                            <div className="social-icons">
                                <a href="#" className="social-link" aria-label="LinkedIn">
                                    <span className="social-icon">💼</span>
                                </a>
                                <a href="#" className="social-link" aria-label="GitHub">
                                    <span className="social-icon">⚡</span>
                                </a>
                                <a href="#" className="social-link" aria-label="Instagram">
                                    <span className="social-icon">📸</span>
                                </a>
                                <a href="#" className="social-link" aria-label="Twitter">
                                    <span className="social-icon">🐦</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject (Optional)"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    className="form-textarea"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="submit-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message
                            </motion.button>

                            <p className="form-note">
                                We'll get back to you within 24 hours
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;