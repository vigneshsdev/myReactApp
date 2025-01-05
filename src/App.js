import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import AdminPortal from './components/AdminPortal/AdminPortal';
import AgentPortal from './components/AgentPortal/AgentPortal';
import UserPortal from './components/UserPortal/UserPortal';
import Header from './components/shared/Header';
import Callback from './components/callback/Callback';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin" element={withAuthenticationRequired(AdminPortal)} />
        <Route path="/agent" element={withAuthenticationRequired(AgentPortal)} />
        <Route path="/policyholder" element={withAuthenticationRequired(UserPortal)} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;