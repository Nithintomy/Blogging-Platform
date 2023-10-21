// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
function Navbar() {
  return (
    <nav>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tech">Tech</Link>
        </li>
        <li>
          <Link to="/travel">Travel</Link>
        </li>
        <li>
          <Link to="/food">Food</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
