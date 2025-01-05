// filepath: src/components/Shared/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <header>
      <nav>
        <ul>
          {!isAuthenticated ? (
            <li><Link to="/login">Login</Link></li>
          ) : (
            <li><Link to="/logout">Logout</Link></li>
          )}
          <li><Link to="/admin">Admin Portal</Link></li>
          <li><Link to="/agent">Agent Portal</Link></li>
          <li><Link to="/policyholder">Policyholder Portal</Link></li>
          <li><Link to="/callback">Callback</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;