import { Link } from 'react-router-dom';
import './NotFound.css'


function NotFoundPage() {
    return (
        <div className="not-found">
            <div className="message-container">
            <h1>404</h1>
            <h3>The page you were trying to reach was</h3>
            <h2>NOT FOUND</h2>
            </div>
            <Link to="/">
                <button></button>
            </Link>
        </div>
    );
}

export default NotFoundPage;
