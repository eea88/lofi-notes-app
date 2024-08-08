import './About.css'
import { Link } from 'react-router-dom';
import github from '../assets/github-icon.png'
import linkedIn from '../assets/linkedin-icon.png'

function About(){
    return(
        <section className="about">
            <h1>Meet the developers</h1>
            <div className="dev-container">
                <img className="dev-picture" src="" alt="" />
                <div className="dev-info">
                    <h2> Esteban Escalante </h2>
                    <div className="socials">
                        <a target="_blank" href="https://github.com/eea88"><img className="github" src={github} alt="github icon" /></a>
                        <a target="_blank" href="https://www.linkedin.com/"><img className="linkedin" src={linkedIn} alt="linkedin icon" /></a>
                    </div>
                </div>
            </div>
            <div className="dev-container">
                <img className="dev-picture" src="" alt="" />
                <div className="dev-info">
                    <h2> Aquiles Hinestrosa </h2>
                    <div className="socials">
                        <a target="_blank" href="https://github.com/CelestialTrash"><img className="github" src={github} alt="github icon" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/aquiles-hinestrosa-5507a124b/"><img className="linkedin" src={linkedIn} alt="linkedin icon" /></a>
                    </div>
                </div>
            </div>
            <div className="dev-container">
                <img className="dev-picture" src="" alt="" />
                <div className="dev-info">
                    <h2> Kim Delgado </h2>
                    <div className="socials">
                        <a target="_blank" href="https://github.com/Kiridea"><img className="github" src={github} alt="github icon" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/kim-delgado-developer"><img className="linkedin" src={linkedIn} alt="linkedin icon" /></a>
                    </div>
                    
                </div>
            </div>
            <div className="return-container">
            <Link className="about-return-btn" to="/">
            </Link>
            </div>
        </section>
    )
}
export default About;