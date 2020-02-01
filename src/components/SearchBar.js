import React, { Component } from 'react'
import '../App.css';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    value: ''
  }

  timeout = null ;

  doSearch = (event) => {
    this.setState({ value: event.target.value })
    clearTimeout(this.timeout);
    // Set timeout to wait for user to stop input
    this.timeout = setTimeout( () => {
      this.props.callback(this.state.value);
    }, 500);
  }

  render() {
    const { value } = this.state;
    return (
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <FontAwesome className="rmdb-fa-search fa-2x" name="search"/>
          <input
            type="text"
            className="rmdb-searchbar-input"
            placeholder="Search"
            onChange={this.doSearch}
            value={value}
            />
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  callback: PropTypes.func
}


export default SearchBar;
