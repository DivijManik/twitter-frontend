import './App.css';
import { useState, useEffect } from 'react';

import MenuImg from './Images/menu.svg'
import SearchImg from './Images/searchNew.svg'
import PostImg from './Images/edit.svg'
import PersonImg from './Images/person.svg'
import HomeImg from './Images/home.svg'

import Posts from './Components/Posts/Posts';
import MenuDrawer from './Components/MenuDrawer/MenuDrawer';

function App() {
  // Set Current page
  const [CurrentPage, setCurrentPage] = useState('.Home');

  // Opening menu from top 
  const [menuOpen, setMenuOpen] = useState(false);
  const handleStateMenu = (e) => {
    setMenuOpen(e);
    if (e == true) {
      setTimeout(() => {
        document.querySelector(CurrentPage + 'Menu')
          .classList.add('selected');
      }, 100);
    }
  };

  // UseEffect
  // useEffect (()=> {
  //   alert("Count changed to " +Counter);
  // },[Counter]);
  return (
    <div className="App">
      {CurrentPage == ".Home" ?
        (
          <HomePage />
        ) : <ProfilePage />

      }

      <CreatePostBtn />
      <TopBar setMenu={handleStateMenu} />
      <BottomBar setCurrentPage={setCurrentPage} />

      {menuOpen && (<MenuDrawer setMenu={handleStateMenu} setCurrentPage={setCurrentPage} />)}
    </div>
  );
}

function TopBar({ setMenu }) {
  return (
    <>
      <div className='TopBar'>
        <button className='MenuBtn' onClick={() => setMenu(true)}><img src={MenuImg} ></img></button>
        <a className='Heading'>Twitter</a>
        <button className='SearchBtn'><img src={SearchImg} ></img></button>
      </div>
    </>
  )
}

function BottomBar({ setCurrentPage }) {
  function ChangePage(page) {
    setCurrentPage(page)
  }

  return (
    <>
      <div className='BottomBar'>
        <button className='BottomTab' onClick={() => ChangePage(".Home")}><img src={HomeImg}></img></button>
        <button className='BottomTab' onClick={() => ChangePage(".Profile")}><img src={PersonImg}></img></button>
      </div>
    </>
  )
}

function CreatePostBtn() {
  return (
    <><button className='CreatePostBtn'><img src={PostImg} ></img></button></>
  )
}


function HomePage() {
  return (
    <>
      <Posts Tweet="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" />

      <Posts Tweet="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" />

      <Posts Tweet="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" />

      <Posts Tweet="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" />
    </>
  )
}

function ProfilePage() {
  return (
    <>
      <div className='ProfileDetails'>
        <img className="UserImgProfile" src={PersonImg}></img>
        <h2>user</h2>
        <div className="detail">
          <img></img>
          <a style={{ fontWeight: 800 }}>200</a>
          <a> </a>
          <a>Followers</a>
        </div>

        <div className="detail">
          <img></img>
          <a style={{ fontWeight: 800 }}>83</a>
          <a> </a>
          <a>Following</a>
        </div>
        <hr></hr>

      </div>


      <div className='UserPosts'>
        <Posts Tweet="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" />

        <Posts Tweet="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" />

        <Posts Tweet="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" />
      </div>
    </>
  )
}

export default App;
