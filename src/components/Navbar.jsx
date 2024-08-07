import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <Link to="/">
                <h1>Lofi Notes</h1>
            </Link>
            <Link to="/users/:userId">
                <div className="user-icon">
                    <img src="" alt="" />
                </div>
            </Link>
        </nav>
    );
}

export default Navbar;
