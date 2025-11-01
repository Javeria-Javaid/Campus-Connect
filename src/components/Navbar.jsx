import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Logo Section */}
                <div className="nav-logo">
                    <img src="favicon.png" alt="CampusConnect Logo" className="logo-image" />
                    <span className="logo-text">CampusConnect</span>
                </div>

                {/* Navigation Links */}
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="#home" className="nav-link active">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#features" className="nav-link">Features</a>
                    </li>
                    <li className="nav-item">
                        <a href="#how-it-works" className="nav-link">How It Works</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>

                {/* Auth Buttons */}
                <div className="nav-buttons">
                    <button className="btn-login">Login</button>
                    <button className="btn-join">Join Now</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;