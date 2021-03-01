import React, { useState } from 'react';
import './Player.css'

const Player = (props) => {
    const { name, salary, img, club } = props.player;
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="single-player col text-center player">
            <div className="card border-0 player-card">
                <img src={img} alt="..." />
                <div className="card-body ">
                    <h5 className="card-title">{name}</h5>
                    <p>{club}</p>
                    <p className="card-text">Salary: ${salary} million</p>
                    <button disabled={isClicked} onClick={() => {
                        props.addToCartHandler(props.player)
                        setIsClicked(true)
                    }} className="btn btn-success">
                        {isClicked ? "✓ Already added to cart" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Player;