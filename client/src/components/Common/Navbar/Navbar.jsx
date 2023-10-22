import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact={true.toString()} to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tech" activeclassname="active">
            Tech
          </NavLink>
        </li>
        <li>
          <NavLink to="/travel" activeclassname="active">
            Travel
          </NavLink>
        </li>
        <li>
          <NavLink to="/food" activeclassname="active">
            Food
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
