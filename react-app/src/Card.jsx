import React from 'react'
import profilePic from './assets/profile-pic.jpg'

function Card(){
    return (
        <div className="card">
            <img src={profilePic} alt="Profile" className="card-image" />
            <h2 className='card-title'>Vincent</h2>
            <p>I code</p>
        </div>
    );
}

export default Card;