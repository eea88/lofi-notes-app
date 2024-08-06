import './HomePage.css'
import { Link } from 'react-router-dom';
import cloud from '../assets/cloud.png'
import cloud2 from '../assets/cloud2.png'
import stars from '../assets/stars.png'

function HomePage (){
    return(
        <section className="homepage">
            <img id="cloud1" src={cloud} alt="cloud" />
            <img id="cloud2" src={cloud2} alt="cloud" />
            <img id="stars" src={stars} alt="stars" />
            <div className="welcome">
                <h2>Welcome to</h2>
                <h1>Lofi Notes</h1>
                <p>An app to create, edit and share notes, events, tasks and more!</p>
            </div>

            <form>
                <div className="user-login">
                    <label>
                        Email
                        <input type="email"/>
                    </label>
                    <label>
                        Password
                        <input type="password"/>
                    </label>
                </div>
                <div className="homepage-btn">
                    <button type="submit">LOG IN</button>
                    <Link to="/users/create">
                        <button>SIGN IN</button>
                    </Link>
                </div>
                    <Link to="/users/1">
                        <button className="guest-btn">CREATE AS GUEST</button>
                    </Link>
            </form>
        </section>
    )
}

export default HomePage;