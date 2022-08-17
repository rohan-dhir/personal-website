import React from 'react'
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Experience from '../components/Experience'
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div className="App">
        <NavBar />
        
        <div className="wrapper">
            <Home />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    </div>
    )
}

export default Main