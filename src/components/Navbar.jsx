import { Link } from "react-router-dom";
import "./Navbar.css";
import { useParams } from "react-router-dom";

function Navbar() {
  const session = JSON.parse(
    localStorage.getItem("sb-adznapocnpiuvpjbargm-auth-token")
  );

  const userId = session ? session.user.id : "1d028fa6-9427-4036-bf9d-c8b573d552d7";

  return (
    <nav>
      <Link to="/">
        <h1>Lofi Plans</h1>
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
