import { Link } from 'react-router-dom';
import '../Login/Login.css'

const Signup = () => {
    return (
        <div className="container">
            <form className="box">
                <h2>Signup</h2>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <Link to="/dashboard" className="button">Sign Up</Link>
                <p>Already have an account?<Link to="/"> Login</Link></p>
            </form>
        </div>
    );
};

export default Signup;