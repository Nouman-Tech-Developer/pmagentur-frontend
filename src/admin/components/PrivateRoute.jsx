import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase, isAuthenticated } from '../../lib/supabase';

const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await isAuthenticated();
      setIsAuth(authenticated);
    };
    checkAuth();
  }, []);

  if (isAuth === null) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <div className="loading-spinner"></div>
        <style>{`
          .loading-spinner {
            width: 40px;
            height: 40px;
            border: 3px solid #E5E5E7;
            border-top-color: #000000;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return isAuth ? children : <Navigate to="/admin/login" replace />;
};

export default PrivateRoute;