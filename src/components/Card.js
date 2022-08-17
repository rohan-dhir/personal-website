import React from 'react'
import './styles/Projects.css';

const Card = (props) => {

    const showButtons = () => {
        switch(props.title) {
            case "Personal Website":
                return (
                    <>
                        <a href={props.gitHub} className="btn-round btn button-center">GitHub</a>
                    </>
                )
            case "iOS & Android Games":
                return (
                    <>
                        <a href={props.demo} className="btn-round btn button-center">Learn More</a>
                    </>
                )
            case "Social Networking Site":
                return (
                    <>
                        <a href={props.gitHub} className="btn-round btn button-center">GitHub</a>
                    </>
                )
            default:
                return (
                    <>
                        <a href={props.gitHub} className="btn-round btn button-option">GitHub</a>
                        <a href={props.demo} className="btn-round btn btn-primary button-demo">Live Demo</a>
                    </>
                )
        }
            
    }

    return (
    <div 
        className="col-md-4 card-container"
        >
            <div className="button-container">
                {showButtons()}
            </div>
            <img className="card-image" alt="..." src={props.pic} />
            
            <h4 className="card-title">{props.title}</h4>
            <p className="card-content">{props.content}</p>
        </div>
    )
}

export default Card;