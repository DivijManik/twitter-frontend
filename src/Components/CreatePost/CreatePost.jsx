import { useState, useEffect } from 'react';
import './CreatePost.css'
import PersonImg from '../Images/person.svg'
import CloseImg from '../Images/close.svg'

function CreatePost({ SetCreatePost, AllTweets = [], SetAllTweets }) {
    const [tweet, setTweet] = useState("");

    function onPostClicked() {
        if (tweet.length > 0) {
            var MyTweets = AllTweets;
            MyTweets.unshift(tweet); // push at beginning

            SetAllTweets(MyTweets);

            // close this page
            SetCreatePost(false);
        }
        else
            alert("Tweet can't be empty")
    }

    return (
        <div className='CreatePostParent'>
            <div className='CreatePostTop'>
                <button className='CloseBtn_cpost' onClick={() => SetCreatePost(false)}><img src={CloseImg}></img></button>
                <button className='PostBtn' onClick={() => onPostClicked()}>Post</button>
            </div>
            {/* User Img */}
            <img className='UserImg_cpost' src={PersonImg}></img>
            <textarea className='Input_cpost' placeholder="What's Happening?" value={tweet} onChange={e => e.target.value.length <= 500 ? setTweet(e.target.value) : {}}></textarea>
            <p style={{ position: "relative", top: 50, left: 80, color: "gray" }}>{tweet.length}/500</p>
        </div>
    )
}

export default CreatePost;