import React, { createRef, Component } from 'react'
import { Carousel } from 'react-bootstrap';
import  './styles/Projects.css';
import { SliderList } from '../data/DataLists';

class Slider extends Component {
    
    displayElement = (video, image) => {
        if(video === "") {
            return <img alt="..." src={image} />
        } else {
            return (
                <iframe 
                    width="640" 
                    height="360" 
                    src={video} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                />
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
                                <div className="col-md-5">
                                    <h3 className="title">{title}</h3>
                                    {this.displayElement(video, image)}
                                    </div>

                                <div className="col-md-2" />
                                <div className="col-md-5">
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