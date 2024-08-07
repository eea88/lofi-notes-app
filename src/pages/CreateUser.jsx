import './CreateUser.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import supabase from "../supabase/config";
import { useNavigate } from "react-router-dom";

function CreateUser() {
    const [user, setUser] = useState(null)

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const createNewUser = (event) => {
        event.preventDefault();

        function newUser() {
            supabase.auth
                .signUp({
                    email,
                    password,
                    data: { username }
                })
                .then((response) => {
                    return supabase
                        .from('users')
                        .insert({ username: username, user_id: response.data.user.id })

                })
                .then(navigate("/"))
                .catch((err) => console.error(err)
                )
        }
        function newUserWOSupabasse() {
            supabase
                .from('users')
                .insert({ username: username, user_id: "147b8cce-f9ec-4b87-8cc3-4eb6686f6b69" })
                .then(navigate("/"))
                .catch((err) => console.error(err)
                )
        }

        newUser()
        //newUserWOSupabasse()

    }


    return (
        <div className="create-user-page">
            <form onSubmit={createNewUser} className="create-user-form">
                <h1>Create User</h1>
                <label>
                    Username
                    <input required onChange={(event) => setUsername(event.target.value)} type="text" name="username" id="username" value={username} />
                </label>
                <label>
                    Email
                    <input required onChange={(event) => setEmail(event.target.value)} type="email" name="email" id="email" value={email} />
                </label>
                <label>
                    Password
                    <input required onChange={(event) => setPassword(event.target.value)} type="password" name="password" id="password" value={password} />
                </label>
                <button type="submit" className="create-user-btn">Sign up</button>
            </form>
            <Link to="/" className="return-btn">
                <button></button>
            </Link>
        </div>
    )
}

export default CreateUser;