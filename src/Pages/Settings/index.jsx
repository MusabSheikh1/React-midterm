import "./Settings.css";

function Settings() {
    return (
        <section className="settings-section">
            <div className="settings-header">
                <h2>Settings</h2>
                <p>Manage your profile, security, and application preferences.</p>
            </div>

            <div className="settings-container">
                <div className="settings-card">
                    <h3>Profile Settings</h3>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <label>
                            Full Name
                            <input type="text" placeholder="Enter your full name" />
                        </label>
                        <label>
                            Email Address
                            <input type="email" placeholder="Enter your email" />
                        </label>
                        <label>
                            Profile Picture
                            <input type="file" />
                        </label>
                        <button type="submit">Save Changes</button>
                    </form>
                </div>

                <div className="settings-card">
                    <h3>Account Settings</h3>
                    <form onSubmit={(e) => {
                        e.preventDefault();

                    }}>
                        <label>
                            Username
                            <input type="text" placeholder="Enter your username" />
                        </label>
                        <label>
                            Change Password
                            <input type="password" placeholder="Enter new password" />
                        </label>
                        <button type="submit">Update Account</button>
                    </form>
                </div>

                <div className="settings-card">
                    <h3>Security</h3>
                    <div className="settings-option">
                        <input type="checkbox" id="2fa" />
                        <label htmlFor="2fa">Enable Two-Factor Authentication</label>
                    </div>
                    <div className="settings-option">
                        <input type="checkbox" id="alerts" />
                        <label htmlFor="alerts">Send me login alerts</label>
                    </div>
                </div>

                <div className="settings-card">
                    <h3>Preferences</h3>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <label>
                            Theme
                            <select>
                                <option>Light</option>
                                <option>Dark</option>
                                <option>System Default</option>
                            </select>
                        </label>
                        <label>
                            Language
                            <select>
                                <option>English</option>
                                <option>Urdu</option>
                                <option>Spanish</option>
                            </select>
                        </label>
                        <button type="submit">Save Preferences</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Settings;





