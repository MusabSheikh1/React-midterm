import "./About.css";
import { useNavigate } from "react-router-dom";

function About() {

    const navigate = useNavigate();

    return (
        <section className="about-section">
            <div className="about-header">
                <h2>About Us</h2>
                <p>Learn more about our mission, values, and the team behind this platform.</p>
            </div>

            <div className="about-container">
                <div className="about-card">
                    <h3>Our Mission</h3>
                    <p>
                        We aim to empower users with simple, effective, and secure digital tools
                        to manage their workflows and personal data with ease.
                    </p>
                </div>

                <div className="about-card">
                    <h3>Our Values</h3>
                    <ul>
                        <li>✨ Simplicity in design</li>
                        <li>🔒 Privacy & Security</li>
                        <li>🤝 Customer-Centric Approach</li>
                        <li>🌱 Continuous Innovation</li>
                    </ul>
                </div>

                <div className="about-card">
                    <h3>Meet the Team</h3>
                    <p>
                        Our diverse team of developers, designers, and innovators work tirelessly
                        to bring you the best experience possible.
                    </p>
                    <button onClick={() => navigate("/Contact")}>Contact Us</button>
                </div>
            </div>
        </section>
    );
}

export default About;
