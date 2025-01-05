import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  React.useEffect(() => {
    const getTokenAndRedirect = async () => {
      if (isAuthenticated && user) {
        try {
          const token = await getAccessTokenSilently();
          console.log('Access Token:', token);

          // Assuming user roles are stored in user['https://example.com/roles']
          const roles = user['https://example.com/roles'] || [];

          if (roles.includes('admin')) {
            navigate('/admin');
          } else if (roles.includes('agent')) {
            navigate('/agent');
          } else {
            navigate('/policyholder');
          }
        } catch (error) {
          console.error('Error getting access token:', error);
        }
      }
    };

    getTokenAndRedirect();
  }, [isAuthenticated, user, navigate, getAccessTokenSilently]);

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <h2>Welcome {user.name}</h2>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;