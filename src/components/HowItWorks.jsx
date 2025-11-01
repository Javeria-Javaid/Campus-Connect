import "./HowItWorks.css";
import { motion } from "framer-motion";

const steps = [
    {
        icon: "🎓",
        title: "Create Your Profile",
        desc: "Showcase your university, department, and skills with a polished portfolio.",
    },
    {
        icon: "📢",
        title: "Find or Post Opportunities",
        desc: "Switch between seeker and finder modes to post or explore campus projects.",
    },
    {
        icon: "🗂️",
        title: "Apply or Manage Applicants",
        desc: "Send proposals, review candidates, and track applications seamlessly.",
    },
    {
        icon: "💬",
        title: "Chat & Collaborate",
        desc: "Connect instantly through real-time messaging and coordinate your projects.",
    },
    {
        icon: "📊",
        title: "Track Your Growth",
        desc: "Analyze engagement, match scores, and improve your reach.",
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="how-it-works">
            <div className="howitworks-container">
                <div className="howitworks-header">
                    <h2>How CampusConnect Works</h2>
                    <p>
                        Your journey from setup to success — step by step, seamless, and smart.
                    </p>
                </div>

                <div className="timeline">
                    <svg
                        className="connector-line"
                        viewBox="0 0 100 1000"
                        preserveAspectRatio="none"
                    >
                        <path d="M50 0 C70 150, 30 250, 50 400 C70 550, 30 650, 50 800" />
                    </svg>

                    <div className="timeline-steps">
                        {steps.map((s, i) => (
                            <motion.div
                                key={i}
                                className={`timeline-card ${i % 2 === 0 ? "left" : "right"}`}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                            >
                                <div className="card-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
