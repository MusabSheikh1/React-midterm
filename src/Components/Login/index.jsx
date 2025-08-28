import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="container">
            <form className="box">
                <h2>Login</h2>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <Link to="/dashboard" className="button">Login</Link>
                <p>Don't have an account? <Link to="/signup">Signup</Link></p>
            </form>
        </div>
    );
};

export default Login;