import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const { handleRedirectCallback } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      try {
        await handleRedirectCallback();
        navigate('/');
      } catch (error) {
        console.error('Error handling redirect callback:', error);
        navigate('/login');
      }
    };
    handleAuth();
  }, [handleRedirectCallback, navigate]);

  return <div>Loading...</div>;
};

export default Callback;