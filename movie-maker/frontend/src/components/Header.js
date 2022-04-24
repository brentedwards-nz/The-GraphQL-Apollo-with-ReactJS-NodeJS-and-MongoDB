import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="topnav">
        <a className="logo" href="/">Movie Maker</a>
        <form className="search-container">
            <a href="/">Add Movies</a>
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </form>
    </div>
  )
}

export default Header; 