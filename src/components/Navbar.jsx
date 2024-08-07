import { Link } from "react-router-dom";
import './Navbar.css'
import { useParams } from "react-router-dom";

function Navbar() {
    const session = JSON.parse(localStorage.getItem("sb-adznapocnpiuvpjbargm-auth-token"))

    const userId = session.user.id
    return (
        <nav>
            <Link to="/">
                <h1>Lofi Notes</h1>
            </Link>
            <Link to={`/users/${userId}`}>
                <div className="user-icon">
                    <img src="" alt="" />
                </div>
            </Link>
        </nav>
    );
}

export default Navbar;
