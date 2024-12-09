import { useState, useEffect } from 'react';
import './MenuDrawer.css'

import CloseImg from '../Images/close.svg'

import HomeImg from './Images/home.svg';
import LogoutImg from './Images/logout.svg';
import ExploreImg from './Images/explore.svg';

var btnClasses = ['.Home', '.Explore', '.Library'];
function CurrentBtnSelect_LeftBar(curBtn) {

    for (let i = 0; i < btnClasses.length; i++) {
        if (document.querySelector(btnClasses[i])) {
            if (i == curBtn) {
                document.querySelector(btnClasses[i])
                    .classList.add('selected');
                document.querySelector(btnClasses[i])
                    .classList.remove('hover');
            }
            else {
                document.querySelector(btnClasses[i])
                    .classList.remove('selected');
                document.querySelector(btnClasses[i])
                    .classList.add('hover');
            }
        }
    }
}

function MenuDrawer({ setMenu, setCurrentPage }) {

    // Close Sidebar with animation
    function toggleSidebar() {
        document.querySelector('.MenuDrawer')
            .classList.toggle('closed');

        // Timeout for animation to play
        setTimeout(() => {
            setMenu(false);
        }, 200);
    }

    function OnMenuBtnClick(curBtn) {
        setCurrentPage(btnClasses[curBtn])
        CurrentBtnSelect_LeftBar(curBtn);

        for (let i = 0; i < btnClasses.length; i++) {
            if (i == curBtn) {
                document.querySelector(btnClasses[i] + 'Menu')
                    .classList.add('selected');
            }
            else {
                document.querySelector(btnClasses[i] + 'Menu')
                    .classList.remove('selected');
            }
        }
    }

    return (
        <div className='MenuBackground'>
            <div onClick={() => setMenu(false)}></div>
            <div className='MenuDrawer'>
                <div className='MenuTop'>
                    <button className='CloseMenu' onClick={() => toggleSidebar()}><img src={CloseImg}></img></button>
                    {/* <img className='MenuLogo' src={LogoImg} ></img> */}
                    <a className='MenuLogoName'>Twitter</a>
                </div>
                <br /><br />
                <button className='HomeMenu' onClick={() => OnMenuBtnClick(0)}><img src={HomeImg}></img><p>Home</p></button>
                <button className='ExploreMenu' onClick={() => OnMenuBtnClick(1)} ><img src={ExploreImg}></img><p>Explore</p></button>
                <button className='LibraryMenu' onClick={() => OnMenuBtnClick(2)}><img src={LogoutImg}></img><p>Log Out</p></button>
                <hr></hr>
                {/* <button className='PlaylistBtn'><img src={AddImg}></img><p>New Playlist</p></button> */}
            </div>
        </ div>
    )
}


export default MenuDrawer;
