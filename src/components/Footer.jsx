import './Footer.css';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Contact', href: '#contact' },
        { name: 'Join Us', href: '#home' }
    ];

    const socialLinks = [
        { name: 'LinkedIn', icon: '💼', href: '#' },
        { name: 'GitHub', icon: '⚡', href: '#' },
        { name: 'Instagram', icon: '📸', href: '#' },
        { name: 'Twitter', icon: '🐦', href: '#' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Main Footer Content */}
                <div className="footer-content">
                    {/* Brand/About Section */}
                    <motion.div
                        className="footer-brand"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="brand-logo">
                            <span className="logo-text">CampusConnect</span>
                        </div>
                        <p className="brand-description">
                            A platform where students connect, collaborate, and grow together.
                        </p>
                    </motion.div>

                    {/* Quick Links Section */}
                    <motion.div
                        className="footer-links"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="links-title">Quick Links</h4>
                        <ul className="links-list">
                            {quickLinks.map((link, index) => (
                                <li key={index} className="link-item">
                                    <a
                                        href={link.href}
                                        className="footer-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const sectionId = link.href.replace('#', '');
                                            scrollToSection(sectionId);
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links Section */}
                    <motion.div
                        className="footer-social"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="social-title">Follow Us</h4>
                        <div className="social-icons">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    className="social-icon"
                                    aria-label={social.name}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="icon-emoji">{social.icon}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Copyright Section */}
                <motion.div
                    className="footer-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="copyright">
                        <p>© {currentYear} CampusConnect. All rights reserved.</p>
                        <p className="built-by">
                            Built with 💙 by Team CampusConnect at Surge '25.
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;