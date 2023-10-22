import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tech" activeClassName="active">
            Tech
          </NavLink>
        </li>
        <li>
          <NavLink to="/travel" activeClassName="active">
            Travel
          </NavLink>
        </li>
        <li>
          <NavLink to="/food" activeClassName="active">
            Food
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
