import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <Link to="/">
                <h2>App Name</h2>
            </Link>
            <Link>
                <div className="user-icon">
                    <img src="" alt="user-image" />
                </div>
            </Link>
        </nav>
    );
}

export default Navbar;
