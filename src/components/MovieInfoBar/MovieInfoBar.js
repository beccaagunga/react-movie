import React from 'react';
import './MovieInfoBar.css';
import { calcTime, convertMoney } from '../../helpers.js'


const MovieInfoBar  = (props) => {
  return (
    <div className="movieinfobar">
      <div className="movieinfobar-content">
            <span className="movieinfobar-info">Running time: {calcTime(props.time)}</span>
            <span className="movieinfobar-info">Budget: {convertMoney(props.budget)}</span>
            <span className="movieinfobar-info">Revenue: {convertMoney(props.revenue)}</span>
      </div>
    </div>
  )
}

export default MovieInfoBar;
