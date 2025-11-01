import './Features.css'
import { useState, useRef, useEffect } from 'react'

const Features = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderRef = useRef(null)
    const autoScrollRef = useRef(null)
    const isManualScroll = useRef(false)

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

    // Calculate slide width
    const getSlideWidth = () => {
        if (sliderRef.current && sliderRef.current.children.length > 0) {
            const slide = sliderRef.current.children[0]
            const style = window.getComputedStyle(slide)
            const margin = parseFloat(style.marginRight) || 0
            return slide.offsetWidth + margin
        }
        return 350 + 32 // Fallback: card width + gap
    }

    // Auto-scroll functionality
    useEffect(() => {
        const startAutoScroll = () => {
            autoScrollRef.current = setInterval(() => {
                if (sliderRef.current && !isManualScroll.current) {
                    const nextSlide = (currentSlide + 1) % features.length
                    scrollToSlide(nextSlide, false) // Don't reset auto-scroll
                }
            }, 3000)
        }

        startAutoScroll()

        return () => {
            if (autoScrollRef.current) {
                clearInterval(autoScrollRef.current)
            }
        }
    }, [currentSlide, features.length])

    const scrollToSlide = (index, isManual = true) => {
        if (sliderRef.current) {
            const slideWidth = getSlideWidth()
            sliderRef.current.scrollTo({
                left: index * slideWidth,
                behavior: 'smooth'
            })
            setCurrentSlide(index)

            if (isManual) {
                resetAutoScroll()
            }
        }
    }

    const nextSlide = () => {
        const next = (currentSlide + 1) % features.length
        scrollToSlide(next, true)
    }

    const prevSlide = () => {
        const prev = currentSlide - 1 < 0 ? features.length - 1 : currentSlide - 1
        scrollToSlide(prev, true)
    }

    const resetAutoScroll = () => {
        isManualScroll.current = true

        // Clear existing auto-scroll
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current)
        }

        // Restart auto-scroll after 5 seconds of inactivity
        setTimeout(() => {
            isManualScroll.current = false
            autoScrollRef.current = setInterval(() => {
                if (sliderRef.current && !isManualScroll.current) {
                    const next = (currentSlide + 1) % features.length
                    scrollToSlide(next, false)
                }
            }, 3000)
        }, 5000)
    }

    const handleScroll = () => {
        if (sliderRef.current && !isManualScroll.current) {
            const slideWidth = getSlideWidth()
            const scrollPosition = sliderRef.current.scrollLeft
            const newSlide = Math.round(scrollPosition / slideWidth) % features.length
            setCurrentSlide(newSlide)
        }
    }

    // Handle manual scroll start
    const handleManualScrollStart = () => {
        isManualScroll.current = true
        resetAutoScroll()
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
                                    scrollToSlide(index, true)
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
                        onTouchStart={handleManualScrollStart}
                        onMouseDown={handleManualScrollStart}
                        onWheel={handleManualScrollStart}
                    >
                        {features.map((feature) => (
                            <div key={feature.id} className="feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Auto-scroll status removed - only this part is removed */}
            </div>
        </section>
    )
}

export default Features