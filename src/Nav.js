import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="App-nav">
      <ul>
      <li><Link to="/home">Home</Link></li>
        <li><Link to="#about">About</Link></li>
        <li><Link to="#menu">Menu</Link></li>
        <li><Link to="/reservation">Reservations</Link></li>
        <li><Link to="#order">Order online</Link></li>
        <li><Link to="#login">Log in</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
