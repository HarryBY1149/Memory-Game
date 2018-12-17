import React from "react";
import "./card.css";

const Card = props => {
    return(
    <div className="mx-auto col-md-4 single-image" id={props.id} onClick={() => props.onClick(props.id)} >
        <div className="img-container">
            <img src={props.photo} alt={props.name} className="image img-fluid"/>
        </div>
    </div>
    )
}

export default Card