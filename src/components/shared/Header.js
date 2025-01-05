// filepath: src/components/Shared/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          <li><Link to="/admin">Admin Portal</Link></li>
          <li><Link to="/agent">Agent Portal</Link></li>
          <li><Link to="/policyholder">Policyholder Portal</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;