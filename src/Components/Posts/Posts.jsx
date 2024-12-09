import { useState, useEffect } from 'react';
import './Posts.css'
import PersonImg from '../Images/person.svg'

function Posts({ ProfileImg = PersonImg, UserName = "User", Date = "1/1/20", Tweet = "Hi Everyone!" }) {
    return (
        <div className='PostParent'>
            {/* User Img */}
            <img className='UserImg' src={ProfileImg}></img>
            <a className='UserName'>{UserName}</a>
            <a className='Date'>{Date}</a>
            <p className='Tweet'>{Tweet}</p>

        </div>
    )
}

export default Posts;
