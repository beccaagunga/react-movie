import React, { Component } from 'react'
import '../App.css';
import rmdbLogo from '../images/rm-logo.jpg'
import tmdbLogo from '../images/tmdb_logo.png'
import { Link } from 'react-router-dom';


class Header extends Component {
  state = {

  }

  render() {
    return (
      <div className="rmdb-header">
        <div className="rmdb-header-content">
        <Link to="/">
          <img
            className="rmdb-logo"
            src= { rmdbLogo }
            alt="logo"
          />
          </Link>
          <img
            className="tmdb-logo"
            src= { tmdbLogo }
            alt="logo"
          />
        </div>
      </div>
    );
  }
}


export default Header;
