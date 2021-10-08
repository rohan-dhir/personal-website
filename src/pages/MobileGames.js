import React from 'react'
import Footer from '../components/Footer';
import { Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SliderList } from '../data/DataLists';
import bg3 from '../imgs/bg3-github.png';
import '../components/styles/PagesStyle.css';
import '../components/styles/Projects.css';


const MobileGames = () => {

    const displayElement = (video, image) => {
        if(video === "") {
            return (
                <div className="slider-media">
            <Image src={image} fluid />
            </div>
            );

        } else {
            return (
                <div className="slider-media">
                    <iframe
                        width="640"
                        height="360"
                        src={video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
            )
        }
    };

    const displayText = (video, image) => {
        return (
            <div className="col-md-6">
                                <div className="justify-content-between align-items-center row">
                                    <div>
                                        {displayElement(video, image)}
                                    </div>
                                </div>
                            </div>
        )
    }

    return (
        <>
        <Nav className="fixed-top navbar nav-bg navbar-expand-lg">
            <div className="container">
                <div className="navbar-translate">
                    <Link to="/" className="btn">Back to Main Site </Link>
                </div>
            </div>
        </Nav>

        <div className="wrapper-games">
        <img alt="..." className="path3" src={bg3} />
            {SliderList.map(({ 
                id, 
                title, 
                downloads, 
                description, 
                video, 
                image, 
                link 
            }) => (
                <div key={id} className="section">
                    <div className="container">
                        <div className="justify-content-between row">
                            {id % 2  === 1 ? displayText(video, image) : <></> }
                            
                            
                            <div className="col-md-5">
                                <h1 className="profile-title text-left">{title}</h1>
                                <div className="profile-downloads">
                                    <strong>Downloads: </strong>
                                    {downloads}
                                </div>
                                <p className="profile-description">
                                    {description}
                                </p>
                                {link === "" ? <></> : 
                                <a href={link} className="btn">View on Store</a>
                                }
                                <div className="btn-wrapper pt-3"></div>
                            </div>

                            {id % 2 === 0 ? displayText(video, image) : <></> }
                        </div>
                    </div>
                </div>

            ))}

            </div>
            <Footer />
        </>
    )
}

export default MobileGames
