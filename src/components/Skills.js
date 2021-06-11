import React from 'react';
import "./styles/Projects.css";
import Icon from "./Icon";
import { SkillList } from "../data/DataLists";
import bg4 from '../imgs/bg4.png';

const Skills = () => {

    return (
        <div id="aboutMe" className="section">
            
            <img alt="..." className="path4" src={bg4} />

            <div className="container">
                <div className="row">
                    <div className="ml-auto mr-auto col-md-8">
                        <div className="section-description text-center">
                            <h2 className="title">About Me</h2>
                            <p className="description">I am passionate about coding. I love sorting algorithms and try to keep up with the latest in software development.</p>
                            <a className="btn-round btn btn-primary" href="https://github.com/rohan-dhir">View Résumé</a>
                        </div>
                    </div>
                </div>

                
                    {SkillList.map (({id, title, description, icon}) => (
                        <div 
                            className="mr-auto ml-auto col-md"
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
                
            </div>
        </div>
    )
}

export default Skills;