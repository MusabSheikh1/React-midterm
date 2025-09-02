import "./Home.css";

function Home() {
    return (
        <section className="home-section">
            <div className="home-header">
                <h2>Welcome to the Dashboard</h2>
                <p>Your central hub to explore features and manage your account.</p>
            </div>

            <div className="home-container">
                <div className="home-card">
                    <h3>Quick Access</h3>
                    <p>Navigate to your most important sections quickly.</p>
                    <ul>
                        <li>📦 Products Overview</li>
                        <li>⚙️ Account Settings</li>
                        <li>📩 Contact Support</li>
                    </ul>
                </div>

                <div className="home-card">
                    <h3>Latest Updates</h3>
                    <p>Stay informed with new features and announcements.</p>
                    <ul>
                        <li>🚀 Dark mode is now available.</li>
                        <li>🔐 Two-Factor Authentication added.</li>
                        <li>🌍 Multi-language support introduced.</li>
                    </ul>
                </div>

                <div className="home-card">
                    <h3>Get Started</h3>
                    <p>New here? Explore the resources to make the most of your dashboard.</p>
                    <button>Explore Tutorials</button>
                </div>
            </div>
        </section>
    );
}

export default Home;
