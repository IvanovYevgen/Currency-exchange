import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';
import Logo from '../logo.png';

class Header extends React.Component {


  render() {
    return (
      <header>
        <div className="top-bar animate-dropdown"></div>
        <div className="main-header">
          <div className="img-div">
            <img src={Logo} alt=""></img>
          </div>
          <div>
            <h1 className="site-title">
              Currency exchange
            </h1>
          </div>
        </div>
        <div className="container">
        </div>
        <Nav />
      </header >
    );
  }
}

export default Header;
