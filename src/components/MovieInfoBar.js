import React from 'react';
import '../App.css';
import FontAwesome from 'react-fontawesome';
import MovieThumb from '../components/MovieThumb';
import { calcTime, convertMoney } from '../helpers.js'


const MovieInfoBar  = (props) => {
  return (
    <div className="rmdb-movieinfobar">
      <div className="rmdb-movieinfobar-content">
          <div className="rmdb-movieinfobar-content-col">
            <FontAwesome className="fa-time fa-2x"  name="clock-o" />
            <span className="rmdb-movieinfobar-info">Running time: {calcTime(props.time)}</span>
          </div>
          <div className="rmdb-movieinfobar-content-col">
            <FontAwesome className="fa-budget fa-2x"  name="money" />
            <span className="rmdb-movieinfobar-info">Budget: {convertMoney(props.budget)}</span>
          </div>
          <div className="rmdb-movieinfobar-content-col">
            <FontAwesome className="fa-revenue fa-2x"  name="ticket" />
            <span className="rmdb-movieinfobar-info">Revenue: {convertMoney(props.revenue)}</span>
          </div>
      </div>
    </div>
  )
}

export default MovieInfoBar;
