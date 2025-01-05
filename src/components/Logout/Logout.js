import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear tokens, etc.)
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;