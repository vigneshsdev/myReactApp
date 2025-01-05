import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import AdminPortal from './components/AdminPortal/AdminPortal';
import AgentPortal from './components/AgentPortal/AgentPortal';
import UserPortal from './components/UserPortal/UserPortal';
import Header from './components/shared/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin" element={<AdminPortal />} />
        <Route path="/agent" element={<AgentPortal />} />
        <Route path="/policyholder" element={<UserPortal />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;