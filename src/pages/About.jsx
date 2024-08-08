import './About.css'
import { Link } from 'react-router-dom';
import github from '../assets/github-icon.png'
import linkedIn from '../assets/linkedin-icon.png'
import base1 from "../assets/base1.png";
import cloud from "../assets/cloud.png";
import cloud2 from "../assets/cloud2.png";
import kimPic from "../assets/kim.jpg"
import estebanPic from "../assets/esteban.png"

function About(){
    return(
        <section className="about">
            <div className="all-devs">
            <h1>Meet the developers</h1>
            <div className="dev-container">
                <img className="dev-picture" src={estebanPic} alt="Esteban Escalante" />
                <div className="dev-info">
                    <h2> Esteban Escalante </h2>
                    <div className="socials">
                        <a target="_blank" href="https://github.com/eea88"><img className="github" src={github} alt="github icon" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/esteban-escalante-07552534/"><img className="linkedin" src={linkedIn} alt="linkedin icon" /></a>
                    </div>
                </div>
            </div>
            <div className="dev-container">
                <img className="dev-picture" src="" alt="Aquiles Hinestrosa" />
                <div className="dev-info">
                    <h2> Aquiles Hinestrosa </h2>
                    <div className="socials">
                        <a target="_blank" href="https://github.com/CelestialTrash"><img className="github" src={github} alt="github icon" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/aquiles-hinestrosa-5507a124b/"><img className="linkedin" src={linkedIn} alt="linkedin icon" /></a>
                    </div>
                </div>
            </div>
            <div className="dev-container">
                <img className="dev-picture" src={kimPic} alt="Kim Delgado" />
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
            </div>
            <img id="create-cloud1" src={cloud} alt="cloud" />
            <img id="create-cloud3" src={cloud} alt="cloud" />
            <img id="create-cloud2" src={cloud2} alt="cloud" />
            <img id="cat-base" src={base1} alt="cat base" />
        </section>
    )
}
export default About;