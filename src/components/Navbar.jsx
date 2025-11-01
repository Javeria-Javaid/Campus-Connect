import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Logo */}
                <div className="nav-logo">
                    <h2>CampusConnect</h2>
                </div>

                {/* Navigation Links */}
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Home</a>
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