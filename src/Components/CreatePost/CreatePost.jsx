import { useState, useEffect } from 'react';
import './CreatePost.css'
import PersonImg from '../Images/person.svg'
import CloseImg from '../Images/close.svg'

function CreatePost({ SetCreatePost }) {
    return (
        <div className='CreatePostParent'>
            <div className='CreatePostTop'>
                <button className='CloseBtn_cpost' onClick={() => SetCreatePost(false)}><img src={CloseImg}></img></button>
                <button className='PostBtn'>Post</button>
            </div>
            {/* User Img */}
            <img className='UserImg_cpost' src={PersonImg}></img>
            <textarea className='Input_cpost' placeholder="What's Happening?"></textarea>
        </div>
    )
}

export default CreatePost;