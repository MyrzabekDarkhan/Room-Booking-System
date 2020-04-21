
import React, { Component } from 'react';
//import app from '../../App'
//import RoomsList from '../Room/RoomsList';
//import {Route} from 'react-router-dom';
import { useHistory } from "react-router-dom";


import './Home.scss';
const Home = (props)=> {
  const history = useHistory();
  const handleRoom = () => {
    history.push('/rooms');
  }

  // $(document).ready(function(){
  //   // menu click event
  //   $('.menuBtn').click(function() {
  //     $(this).toggleClass('act');
  //       if($(this).hasClass('act')) {
  //         $('.mainMenu').addClass('act');
  //       }
  //       else {
  //         $('.mainMenu').removeClass('act');
  //       }
  //   });
  // });

    return (
      <>
        <div className="hero" id="home">
          <div className="background"></div>
          <div className="overlay"></div>
          <div className="hero-content">
            <h1>MEETINGLY</h1>
            <div className="line"></div>
            <p>Smart and simple meeting room booking system </p>
            <button className="showButton" onClick={handleRoom}>BOOK ROOM NOW</button>
          </div>
          <a className="readMore smooth-scroll" href="#about">
            
            
          </a>
        </div>
        <div className="mobile-nav">
      
      		<header>
			<a href="#" className="logo">MEETINGLY</a>
			<a href="#" className="menuBtn">
				<span className="lines"></span>
			</a>
			<nav className="mainMenu">
				<ul>
					<li>
						<a href="#">Intro</a>
					</li>
					<li>
						<a href="#">Services</a>
					</li>
					<li>
						<a href="#">Team</a>
					</li>
					<li>
						<a href="#">Pricing</a>
					</li>
					<li>
						<a href="#" className="suBtn">Sing Up</a>
					</li>
				</ul>
			</nav>
		</header>
        </div>
        <nav>
          <div id="nav-wrapper">
            <div className="nav-left">
              <h1>MEETINGLY</h1>
            </div>
            <div className="nav-right">
              <ul>
                <li>
                  <a className="smooth-scroll" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="smooth-scroll" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="smooth-scroll" href="#">
                    The Team
                  </a>
                </li>
                <li>
                  <a className="smooth-scroll" href="#">
                    Sign out
                  </a>
                </li>
             
                
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }

export default Home;
