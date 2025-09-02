import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
    return (
        <div className="signup-page">
            <div className="signup-box">
                <h2 className="signup-title">Sign Up</h2>
                <p className="signup-text">Create a new account to get started.</p>

                <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
                    <label className="signup-label">
                        Full Name
                        <input type="text" placeholder="Enter your full name" className="signup-input" />
                    </label>

                    <label className="signup-label">
                        Email
                        <input type="email" placeholder="Enter your email" className="signup-input" />
                    </label>

                    <label className="signup-label">
                        Password
                        <input type="password" placeholder="Create a password" className="signup-input" />
                    </label>

                    <button type="submit" className="signup-btn">Sign Up</button>
                </form>

                <p className="signup-footer">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
