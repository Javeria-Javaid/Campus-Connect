import './Navbar.css';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="nav-container">
                {/* Logo Section */}
                <a href="#home" className="nav-logo">
                    <img src="cc_logo.png" alt="CampusConnect Logo" className="logo-image" />
                    <span className="logo-text">CampusConnect</span>
                </a>

                {/* Navigation Links */}
                <ul className="nav-menu">
                    <li><a href="#home" className="nav-link active">Home</a></li>
                    <li><a href="#features" className="nav-link">Features</a></li>
                    <li><a href="#how-it-works" className="nav-link">How It Works</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>

                {/* Auth Buttons */}
                <div className="nav-buttons">
                    <button className="btn btn-login">Login</button>
                    <button className="btn btn-join">Join Now</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
