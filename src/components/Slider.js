import React, { Component } from 'react'
import { Carousel, ResponsiveEmbed, Image } from 'react-bootstrap';
import  './styles/Projects.css';
import { SliderList } from '../data/DataLists';

class Slider extends Component {
    
    displayElement = (video, image) => {
        if(video === "") {
            return <Image src={image} fluid />
        } else {
            return (
                <div  className="slider-video">
                    <ResponsiveEmbed aspectRatio="16by9">
                        <embed type="image/svg+xml" src={video} />
                    </ResponsiveEmbed>
                </div>
               
            )
        }
    };

    render() {
        return (
            <Carousel>
                {SliderList.map(({ 
                    id, 
                    title, 
                    launched, 
                    downloads, 
                    description, 
                    video, 
                    image, 
                    link 
                }) => (
                    <Carousel.Item
                        className="carousel"
                        key={id}
                        interval={4000}
                    >
                            <div className="row">
                                <div className="col-md-8">
                                    <h3 className="slider-subtitle">{title}</h3>
                                    {this.displayElement(video, image)}
                                    </div>

                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <div className="slider-info">
                                            <strong>Launched: </strong>
                                            {launched}
                                            <br />
                                            <strong>Downloads: </strong>
                                            {downloads}
                                        </div>

                                        <div className="slider-descr">
                                            {description}
                                        </div>

                                        <div className="footer">
                                            <a href={link} className="btn-icon btn-round btn-github">
                                                <i className="fab fa-github"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Carousel.Item>
                ))};
            </Carousel>
        )
    };
};

export default Slider;