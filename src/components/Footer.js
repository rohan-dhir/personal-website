import './styles/Home.css';
import { Link } from 'react-scroll';

const Footer = () =>{
    return(
        <>
        <footer>
            
            <ul className="permalinks">
                <li>
                    <Link 
                    className="footer-link" 
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                        Home 
                    </Link>
                </li>
                <li>
                    <Link 
                    className="footer-link" 
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                        Experience 
                    </Link>
                </li>
                <li>
                    <a 
                    className="footer-link" 
                    href="/mobileGames"
                    
                    >
                        Mobile Games 
                    </a>
                </li>
                <li>
                    <Link 
                    className="footer-link" 
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                        Projects 
                    </Link>
                </li>
                <li>
                    <Link 
                    className="footer-link" 
                    to="aboutMe"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                        About Me 
                    </Link>
                </li>
                <li>
                    <Link 
                    className="footer-link" 
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    >
                        Contact 
                    </Link>
                </li>
            </ul>
            <div className="container">
                <p>© 2024 Rohan Dhir. All trademarks are properties of their respective owners.</p>
            </div>
        </footer>
        <div className="bottom-filler">
            </div>
        </>
    )
};

export default Footer;