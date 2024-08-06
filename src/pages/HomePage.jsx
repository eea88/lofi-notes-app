import './HomePage.css'
import { Link } from 'react-router-dom';
import cloud from '../assets/cloud.png'
import cloud2 from '../assets/cloud2.png'
import stars from '../assets/stars.png'
import supabase from '../supabase/config';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const getSession = async() => {
        try {
            const session = await supabase.auth.getSession()

            if(session.data.session.expores_at > Date.now() / 1000) {
                console.log("Logged in");
            } else {
                console.log("Not logged in");
                                        
            }
        } catch (error) {
            console.log("Not logged in", error);
            
        }

    }

    useEffect(() => {
        getSession();
    }, [])

    function handleLogin(event) {
        event.preventDefault();
        supabase.auth
            .signInWithPassword({
                email,
                password
            })
            .then((response) => {
                console.log(response)
                navigate(`/users/${response.data.user.id}`)
            })
            .catch((err) => console.error(err))
    }

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

            <form onSubmit={handleLogin}>
                <div className="user-login">
                    <label>
                        Email
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </label>
                    <label>
                        Password
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
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