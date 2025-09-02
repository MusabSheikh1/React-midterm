import { NavLink } from "react-router-dom";
import "../../App.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <h2 className="logo">🌟 MyApp</h2>

            <NavLink to="/home" className="nav-item">
                🏠 Home
            </NavLink>
            <NavLink to="/about" className="nav-item">
                ℹ️ About
            </NavLink>
            <NavLink to="/products" className="nav-item">
                🛍️ Products
            </NavLink>
            <NavLink to="/contact" className="nav-item">
                📞 Contact
            </NavLink>
            <NavLink to="/settings" className="nav-item">
                ⚙️ Settings
            </NavLink>
            <NavLink to="/login" className="nav-item">
                🔑 Login
            </NavLink>
            <NavLink to="/signup" className="nav-item">
                ✨ Signup
            </NavLink>
        </div>
    );
}

export default Sidebar;

