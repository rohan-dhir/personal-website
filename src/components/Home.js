import React from 'react';
import "./styles/Home.css";
import profile from '../imgs/profile.jpg'

import bg1 from '../imgs/bg1.png';

const Home = () => {
    return (
        <div id="home" className="page-header">

            <img alt="..." className="path" src={bg1} />
            <img alt="..." className="path2" src={bg1} />

            <div className="container">
                <div className="brand">
                    <div className="image">
                        <img className="profile" src={profile} alt="..." />
                    </div>
                    <h1>Rohan Dhir</h1>
                </div>
            </div>
            
        </div>
    )
}

export default Home;
