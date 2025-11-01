import './Features.css'
import { useState, useRef, useEffect } from 'react'

const Features = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderRef = useRef(null)
    const autoScrollRef = useRef(null)

    const features = [
        {
            id: 1,
            icon: '🔁',
            title: 'Dual Role System',
            description: 'Switch between Talent Finder and Seeker anytime.'
        },
        {
            id: 2,
            icon: '🎯',
            title: 'Smart Match Score',
            description: 'Instantly know how well your skills fit each post.'
        },
        {
            id: 3,
            icon: '💬',
            title: 'Real-time Chat',
            description: 'Collaborate instantly without leaving the platform.'
        },
        {
            id: 4,
            icon: '🗂️',
            title: 'Application Tracking',
            description: 'See every stage of your applied opportunities.'
        },
        {
            id: 5,
            icon: '🧑‍💻',
            title: 'Profile Builder',
            description: 'Showcase your skills, projects, and resume in one place.'
        },
        {
            id: 6,
            icon: '📊',
            title: 'Post Analytics',
            description: 'Track views, applicants, and engagement stats.'
        }
    ]

    // Auto-scroll functionality
    useEffect(() => {
        const startAutoScroll = () => {
            autoScrollRef.current = setInterval(() => {
                if (sliderRef.current) {
                    const nextSlide = (currentSlide + 1) % features.length
                    scrollToSlide(nextSlide)
                }
            }, 3000) // Change slide every 3 seconds
        }

        startAutoScroll()

        // Cleanup on unmount
        return () => {
            if (autoScrollRef.current) {
                clearInterval(autoScrollRef.current)
            }
        }
    }, [currentSlide, features.length])

    const scrollToSlide = (index) => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.children[0].offsetWidth + 32 // card width + gap
            sliderRef.current.scrollTo({
                left: index * slideWidth,
                behavior: 'smooth'
            })
            setCurrentSlide(index)
        }
    }

    const nextSlide = () => {
        const next = (currentSlide + 1) % features.length
        scrollToSlide(next)
        resetAutoScroll()
    }

    const prevSlide = () => {
        const prev = currentSlide - 1 < 0 ? features.length - 1 : currentSlide - 1
        scrollToSlide(prev)
        resetAutoScroll()
    }

    const resetAutoScroll = () => {
        // Reset auto-scroll timer when user interacts manually
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current)
        }
        // Restart auto-scroll after 5 seconds of inactivity
        setTimeout(() => {
            autoScrollRef.current = setInterval(() => {
                const next = (currentSlide + 1) % features.length
                scrollToSlide(next)
            }, 3000)
        }, 5000)
    }

    const handleScroll = () => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.children[0].offsetWidth + 32
            const newSlide = Math.round(sliderRef.current.scrollLeft / slideWidth)
            setCurrentSlide(newSlide)
        }
    }

    return (
        <section id="features" className="features-section">
            <div className="features-container">
                <div className="features-header">
                    <h2 className="features-title">Platform Features</h2>
                    <p className="features-subtitle">
                        Everything you need to connect, collaborate, and thrive on campus
                    </p>
                </div>

                {/* Manual Navigation Controls */}
                <div className="features-controls">
                    <button
                        className="nav-btn prev-btn"
                        onClick={prevSlide}
                        aria-label="Previous feature"
                    >
                        ←
                    </button>

                    <div className="slide-indicators">
                        {features.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => {
                                    scrollToSlide(index)
                                    resetAutoScroll()
                                }}
                                aria-label={`Go to feature ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        className="nav-btn next-btn"
                        onClick={nextSlide}
                        aria-label="Next feature"
                    >
                        →
                    </button>
                </div>

                {/* Features Slider */}
                <div className="features-slider-container">
                    <div
                        className="features-slider"
                        ref={sliderRef}
                        onScroll={handleScroll}
                    >
                        {/* First set of features */}
                        {features.map((feature) => (
                            <div key={feature.id} className="feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {features.map((feature) => (
                            <div key={`${feature.id}-duplicate`} className="feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Features