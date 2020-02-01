import React from 'react'
import '../App.css';

const Load = (props) => {
  return (
      <div className="rmdb-loadmorebtn" onClick={props.onClick}>
        <p>{props.text}</p>
      </div>
    );
}


export default Load;
