import React from 'react';
import "./styles/Projects.css";
import Icon from "./Icon";
import { ExperienceList } from "../data/DataLists";
import Slider from './Slider';
import bg5 from '../imgs/bg5-breifcase.png';

const Experience = () => {

    return (
        <div id="experience" className="section">
            
            <img alt="..." className="path6" src={bg5} />

            <div className="container-fluid">
                <div className="row">
                    <div className="ml-auto mr-auto col-md-8">
                        <div className="section-description text-center">
                            <h2 className="title">Experience</h2>
                            <a className="btn-round btn btn-primary" href="https://github.com/rohan-dhir/personal-website/tree/master/src/docs/Resume.pdf">View Resume</a>
                        </div>
                    </div>
                </div>
                {ExperienceList.map (({id, title, description, icon}) => (
                        <div 
                            className="col-12"
                            key={id}
                        >
                            <div className="info info-horizontal">
                                <div className="icon">
                                    <Icon icon={icon} />
                                </div>
                                <div className="descrBlock">
                                    <h4 className="info-title">{title}</h4>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    )).reduce((r, element, index) => {
                        index % 2 === 0 && r.push([]);
                        r[r.length - 1].push(element);
                        return r;
                    }, []).map((rowContent, id) => {
                        return<div key={id} className="row">{rowContent}</div>
                    })
                    };
                <div className="container">
                            <Slider />
                    </div>
            </div>
        </div>
    )
}

export default Experience;