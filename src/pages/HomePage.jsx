import './HomePage.css'
import { Link } from 'react-router-dom';

function HomePage (){
    return(
        <section>
            <div className="welcome">
                <h2>Welcome to</h2>
                <h1>Lofi Notes</h1>
                <p>An app to create, edit and share notes, events, tasks and more!</p>
            </div>
            <div className="user-login">
                <h3>Here goes the user stuff</h3>
            </div>
            <Link to="/users/create">
            <button>CREATE</button>
            </Link>
        </section>
    )
}

export default HomePage;