import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from '../../history';

import './Home.scss';
import RoomsList from '../Room/RoomsList';

export class Home extends React.Component {


  constructor() {
    super();



    this.state = {
      displayMenu: false,
    };


    
  //   this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  //   this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
   }

  logOut() {
    console.log('clicked')
    localStorage.clear();
    history.push("/login");

  }
  // handleSuccessfulAuth(data) {
  //   this.props.handleLogin(data);
  //   this.props.history.push("/home");
  // }

  // handleLogoutClick() {
  //   axios
  //     .delete("http://localhost:3000/logout", { withCredentials: true })
  //     .then(response => {
  //       this.props.handleLogout();
  //     })
  //     .catch(error => {
  //       console.log("logout error", error);
  //     });
  // }


  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <>
        <div className="hero" id="home">
          <div className="background"></div>
          <div className="overlay"></div>
          <div className="hero-content">
            <h1>MEETINGLY</h1>
            <div className="line"></div>
            <p>Smart and simple meeting room booking system </p>
            <button
              className="showButton"
              onClick={() => history.push('/rooms')}
            >
              BOOK ROOM NOW
            </button>
          </div>
          <a className="readMore smooth-scroll" href="#about"></a>
        </div>
        <div className="mobile-nav">
          <header>
            <a className="logo">
              MEETINGLY
            </a>
            <a className="menuBtn" onClick={this.showDropdownMenu}>
              <span className="lines">
                {this.state.displayMenu ? (
                  <ul className="mob-ul">
                    <li className="mob-li">
                      <button className="active" onClick={() => history.push('/rooms')}>
                        Rooms
                      </button>
                    </li>
                    <li className="mob-li">
                      <button className="active" onClick={this.logOut}>Sign out</button>
                    </li>
                  </ul>
                ) : null}
              </span>
            </a>

            <nav className="mainMenu"></nav>
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
                  <a className="smooth-scroll"onClick={() => history.push('/rooms')}>
                    Rooms
                  </a>
                </li>
                <li>
                  <a className="smooth-scroll" onClick={this.logOut}>
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
}

export default Home;
