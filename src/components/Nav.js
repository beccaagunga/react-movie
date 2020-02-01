import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className="rmdb-navigation">
    <div className="rmdb-navigation-content">
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>/</p>
      <p>{props.movie}</p>
      </div>
    </div>
  )
}

export default Nav;
