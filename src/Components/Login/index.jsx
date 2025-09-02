import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    const [form, setForm] = useState({ email: "", password: "" });

    const users = [
        { name: "Musab", email: "musab@example.com", password: "1234" },
        { name: "Saad", email: "saad@example.com", password: "5678" },
        { name: "Nabeel", email: "nabeel@example.com", password: "abcd" },
        { name: "Salman", email: "salman@example.com", password: "efgh" },
        { name: "Umar", email: "umar@example.com", password: "ijkl" },
        { name: "Ayan", email: "ayan@example.com", password: "mnop" },
    ];

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find(
            (u) => u.email === form.email && u.password === form.password
        );

        if (user) {
            alert(`✅ You are logged in, ${user.name}`);
        } else {
            alert("❌ Incorrect email or password");
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <h2 className="login-title">Login</h2>
                <p className="login-text">Welcome back! Please log in to continue.</p>

                <form className="login-form" onSubmit={handleLogin}>
                    <label className="login-label">
                        Email
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="login-input"
                            required
                        />
                    </label>

                    <label className="login-label">
                        Password
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="login-input"
                            required
                        />
                    </label>

                    <button type="submit" className="login-btn">Login</button>
                </form>

                <p className="login-footer">
                    Don’t have an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;

