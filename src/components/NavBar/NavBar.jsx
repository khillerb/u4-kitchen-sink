import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
  if (props.user){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <a className="navbar-brand" href="#">Hello {props.user.name}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <span><Link to='/calendar' className="nav-link waves-effect waves-light">My Calendar</Link></span>
            </li>
            <li className="nav-item">
              <Link to='/user' className="nav-link waves-effect waves-light">User Info</Link>
            </li>
            <li className="nav-item">
              <Link to='' className='nav-link waves-effect waves-light' onClick={props.handleLogout}>Log Out</Link>
            </li>
            <li className="nav-item">
              <Link to={{pathname:`/calendar/events`}} className="nav-link waves-effect waves-light" >Events </Link>
            </li>
          </ul>
        </div>
      </nav>
          
    )
  } else {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <a className="navbar-brand" href="#">Hello</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <span><Link to='/calendar' className="nav-link waves-effect waves-light">My Calendar</Link></span>
            </li>
            <li className="nav-item">
              <Link to='/signup' className="nav-link waves-effect waves-light">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link to='/login' className="nav-link waves-effect waves-light">Log in</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
};

export default NavBar;


