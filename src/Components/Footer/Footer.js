import './Footer.css';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'; 
import { FaFacebook } from 'react-icons/fa';


function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="connections">
                    <a href="/#" id="instaIcon"><AiFillInstagram /></a>
                    <a href="/#" id="fbIcon"><FaFacebook /></a>
                    <a href="https://www.linkedin.com/in/georgi-alexandrov-498b9370/" target="_blank" rel="noreferrer" id="linkedIcon"><AiFillLinkedin /></a>
                </div>
                Recipe Portal &copy; 2021 &#8226;
                <a className ="gitLink" href="https://github.com/georgiAlexandrov5?tab=repositories" target="_blank" rel="noreferrer">GitHub</a>
            </div>
        </footer >
    )
}

export default Footer;