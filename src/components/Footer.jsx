import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return(
        <footer>
            <p>Developed and designed by the <Link to="/about">Lofi Plans team</Link></p>
        </footer>
    )
}

export default Footer