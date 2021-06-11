import React from 'react'
import './styles/Projects.css';

const Card = (props) => {

    const handleOnClick = () => {
        if(props.title !== "Personal Website")
            window.location.href=props.onClick;
    }

    return (
        <div 
        className="col-md-4"
        onClick={(handleOnClick)}
        >
            <img className="img" alt="..." src={props.pic} />
            <h4 className="card-title">{props.title}</h4>
            <p className="card-content">{props.content}</p>
        </div>
    )
}

export default Card;