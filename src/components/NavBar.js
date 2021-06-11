import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './styles/NavBar.css';
import { Link } from 'react-scroll';

import menuIcon from '../imgs/menuIcon.png';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {barStyle: "fixed-top navbar-transparent navbar", barShrank: false};
        this.resizeHeaderOnScroll = this.resizeHeaderOnScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.resizeHeaderOnScroll);
    }

    resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 200;

        if (distanceY > shrinkOn && !this.state.barShrank) {
            this.setState({barStyle: "fixed-top bg navbar"});
            this.setState({barShrank: true});

        } else if (distanceY < shrinkOn && this.state.barShrank) {
            this.setState({barStyle: "fixed-top navbar-transparent navbar"});
            this.setState({barShrank: false});
        }
    }
    render() {
        return (
            <>
                <Navbar
                className={this.state.barStyle}
                expand="md"
                
                >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" > <img alt="..." src={menuIcon} style={{width: "40px", height: "40px"}} /> </Navbar.Toggle>
                    <Navbar.Collapse>
                    
                    <Nav className="container">
                        <Nav.Item>
                            <Link 
                                className="nav-item" 
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Home
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link 
                                className="nav-item" 
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link 
                                className="nav-item" 
                                to="aboutMe"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                About Me
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Link 
                                className="nav-item" 
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </Nav.Item>
                        </Nav>
                
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default NavBar;
