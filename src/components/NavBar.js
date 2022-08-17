import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './styles/NavBar.css';
import { Link } from 'react-scroll';
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from 'react-icons/ai'
import { BsBriefcase } from 'react-icons/bs';
import { HiCode } from 'react-icons/hi'

const NavBar = () => {
        return (
            <Navbar className="navigation-bar">
                <Nav.Item>
                <Link 
                    className="nav-link" 
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <AiOutlineHome />
                </Link>
                </Nav.Item>
                <Nav.Item>
                <Link 
                    className="nav-link" 
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <BsBriefcase />
                </Link>
                </Nav.Item>
                <Nav.Item>
                <Link 
                    className="nav-link" 
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <HiCode />
                </Link>
                </Nav.Item>
                <Nav.Item>
                <Link 
                    className="nav-link" 
                    to="aboutMe"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <AiOutlineUser />
                </Link>
                </Nav.Item>
                <Nav.Item>
                <Link 
                    className="nav-link" 
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <AiOutlineMail />
                </Link>
                </Nav.Item>
            </Navbar>
        );
    
}

export default NavBar;
