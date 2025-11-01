import './Navbar.css';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section based on scroll position
            const sections = ['home', 'features', 'how-it-works', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        scrollToSection(sectionId);
        setActiveSection(sectionId);
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="nav-container">
                {/* Logo Section */}
                <a
                    href="#home"
                    className="nav-logo"
                    onClick={(e) => handleNavClick(e, 'home')}
                >
                    <img src="cc_logo.png" alt="CampusConnect Logo" className="logo-image" />
                    <span className="logo-text">CampusConnect</span>
                </a>

                {/* Navigation Links */}
                <ul className="nav-menu">
                    <li>
                        <a
                            href="#home"
                            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, 'home')}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#features"
                            className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, 'features')}
                        >
                            Features
                        </a>
                    </li>
                    <li>
                        <a
                            href="#how-it-works"
                            className={`nav-link ${activeSection === 'how-it-works' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, 'how-it-works')}
                        >
                            How It Works
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, 'contact')}
                        >
                            Contact
                        </a>
                    </li>
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