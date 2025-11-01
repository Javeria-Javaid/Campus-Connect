import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                {/* Left Content */}
                <div className="hero-content">
                    <h1 className="hero-title">
                        Connect, Collaborate &
                        <span className="highlight"> Thrive</span> on Campus
                    </h1>
                    <p className="hero-subtitle">
                        Your all-in-one platform for campus life. Connect with peers,
                        discover events, join clubs, and make the most of your university experience.
                    </p>
                    <div className="hero-buttons">
                        <button className="hero-btn primary">
                            Get Started
                        </button>
                        <button className="hero-btn secondary">
                            Watch Demo
                        </button>
                    </div>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">10K+</span>
                            <span className="stat-label">Students Connected</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Clubs & Societies</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Campuses</span>
                        </div>
                    </div>
                </div>

                {/* Right Content - Illustration/Image */}
                <div className="hero-visual">
                    <div className="hero-image">
                        <div className="floating-card card-1">
                            <span>🎓 Student Profiles</span>
                        </div>
                        <div className="floating-card card-2">
                            <span>📅 Events</span>
                        </div>
                        <div className="floating-card card-3">
                            <span>👥 Clubs</span>
                        </div>
                        <div className="floating-card card-4">
                            <span>💬 Chat</span>
                        </div>
                        <div className="main-illustration">
                            <div className="network-graphic"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero