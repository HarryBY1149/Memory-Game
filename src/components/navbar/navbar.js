import React from "react";
import "./navbar.css";

const Navbar = props => {
    return (
        <div className="row mt-2 col-md-12 text-center navbar">
            <h1 className=" title">Animal Memory Game</h1>
            <h4 className="instructions">Click an animal to gain points, don't click any portrait twice or it's game over!</h4>
            <h4 className="mx-auto score">Score: {props.score} | High Score: {props.topScore}</h4>
        </div>
    )
}

export default Navbar;