import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div key={props.id} className="card">
            <div className="card-content">
                <div className="image-box">
                    <img src={`http://image.tmdb.org/t/p/original//${props.image}`} alt="movie_poster" />
                </div>
                <div className="right-content">
                    <h2>{props.title}</h2>
                    <p>{props.overview}</p>
                </div>
                <div className="vote-box">{props.voteAverage}</div>
            </div>
        </div>
    );
}

export default Card;