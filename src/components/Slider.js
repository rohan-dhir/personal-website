import React, { Component } from 'react'
import { Carousel, ResponsiveEmbed, Image } from 'react-bootstrap';
import  './styles/Projects.css';
import { SliderList } from '../data/DataLists';

class Slider extends Component {
    
    displayElement = (video, image) => {
        if(video === "") {
            return (
                <div className="slider-media">
            <Image src={image} fluid />
            </div>
            );

        } else {
            return (
                <div className="slider-media">
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
                    downloads, 
                    description, 
                    video, 
                    image
                }) => (
                    <Carousel.Item
                        className="carousel"
                        key={id}
                        interval={7000}
                    >
                            <div className="row">
                                <div className="col-md-8">
                                    <h3 className="slider-subtitle">{title}</h3>
                                    {this.displayElement(video, image)}
                                    </div>

                                <div className="col-lg-4">
                                    <div className="wrapper">
                                        <div className="slider-info">
                                            <strong>Downloads: </strong>
                                            {downloads}
                                        </div>

                                        <div className="slider-descr">
                                            {description}
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