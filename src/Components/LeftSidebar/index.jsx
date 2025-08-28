import { NavLink } from "react-router-dom";
import "../../App.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <h2 className="logo">🌟 MyApp</h2>

            <NavLink to="/" className="nav-item">
                🏠 Home
            </NavLink>
            <NavLink to="/about" className="nav-item">
                ℹ️ About
            </NavLink>
            <NavLink to="/dashboard/products" className="nav-item">
                🛍️ Products
            </NavLink>
            <NavLink to="/dashboard/contact" className="nav-item">
                📞 Contact
            </NavLink>
            <NavLink to="/dashboard/settings" className="nav-item">
                ⚙️ Settings
            </NavLink>
        </div>
    );
}

export default Sidebar;
