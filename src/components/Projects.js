import React from 'react'
import './styles/Projects.css';
import Card from './Card';

import { ProjectList } from '../data/DataLists';
import bg3 from '../imgs/bg3-github.png';

const Projects = () => {
    
    return (
        <div id="projects" className="section">
            <img alt="..." className="path3" src={bg3} />
            <div className="container">
                <div className="ml-auto mr-auto col-md-8">
                    <div className="section-description text-center">
                        <h2 className="title">Featured Projects</h2>
                        <p className="description">The following are some of my favourite projects that I've enjoyed working on. Click below to view the rest on my GitHub!</p>
                        <a className="btn-round btn btn-primary" href="https://github.com/rohan-dhir">View GitHub</a>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="section-cols">
                    <div className="mt-5 row">
                        {ProjectList.map(({id, title, content, pic, gitHub, demo}) => (
                            <Card 
                                key={id}
                                title={title}
                                content={content}
                                pic={pic}
                                gitHub={gitHub}
                                demo={demo}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Projects;
