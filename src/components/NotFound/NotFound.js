import React from 'react'
import './NotFound.css';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div className="notfound">
      <h1>This page does not exist.</h1>
        <a className="home" href="/"><p >Go Home</p></a>
      </div>
    )
  }

export default NotFound;
