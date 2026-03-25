import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.email || !formData.password) {
      setError('Please enter email and password');
      setLoading(false);
      return;
    }

    // Supabase Authentication
    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password
    });

    if (authError) {
      setError('Invalid email or password');
      setLoading(false);
      return;
    }

    if (data.session) {
      localStorage.setItem('supabase_token', data.session.access_token);
      localStorage.setItem('adminUser', JSON.stringify({ 
        email: data.user.email,
        id: data.user.id 
      }));
      navigate('/admin/dashboard');
    }
    
    setLoading(false);
  };

  return (
    <div className="admin-login">
      <div className="login-background" />
      
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="login-title">Admin Panel</h1>
            <p className="login-subtitle">Please sign in to continue</p>
          </div>

          {error && (
            <div className="login-error">
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label className="form-label">Email</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter email"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6-4h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2zm10-4V6a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="login-button"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="login-demo">
            <p className="demo-text">Demo Credentials</p>
            <div className="demo-credentials">
              <span className="demo-code">admin@pmagentur.com</span>
              <span className="demo-separator">/</span>
              <span className="demo-code">admin123</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .admin-login {
          width: 100%;
          min-height: 100vh;
          position: relative;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .login-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000000;
          z-index: 1;
        }

        .login-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 480px;
          padding: 40px 24px;
          margin: 0 auto;
        }

        .login-card {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 48px 40px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          border: 1px solid #E5E5E7;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .login-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.6);
        }

        .login-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .login-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 24px;
          background: #000000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
        }

        .login-title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 8px 0;
          letter-spacing: -0.02em;
        }

        .login-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: #6B7280;
          margin: 0;
        }

        .login-error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid #EF4444;
          border-radius: 12px;
          padding: 12px 16px;
          margin-bottom: 24px;
        }

        .login-error p {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          color: #EF4444;
          margin: 0;
          text-align: center;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          color: #9CA3AF;
          pointer-events: none;
        }

        .form-input {
          width: 100%;
          padding: 12px 16px 12px 48px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: #111827;
          background: #FFFFFF;
          border: 1px solid #E5E5E7;
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: #000000;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
        }

        .form-input::placeholder {
          color: #9CA3AF;
        }

        .login-button {
          width: 100%;
          padding: 14px 24px;
          background: #000000;
          color: #FFFFFF;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 8px;
        }

        .login-button:hover:not(:disabled) {
          background: #1F2937;
          transform: translateY(-1px);
        }

        .login-button:active:not(:disabled) {
          transform: translateY(0);
        }

        .login-button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.3);
        }

        .login-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .login-demo {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid #E5E5E7;
          text-align: center;
        }

        .demo-text {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #6B7280;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0 0 12px 0;
        }

        .demo-credentials {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .demo-code {
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 14px;
          font-weight: 500;
          color: #111827;
          background: #F3F4F6;
          padding: 6px 12px;
          border-radius: 8px;
          letter-spacing: 0.5px;
        }

        .demo-separator {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          color: #9CA3AF;
        }

        @media (max-width: 640px) {
          .login-container {
            padding: 24px 16px;
          }

          .login-card {
            padding: 32px 24px;
          }

          .login-icon {
            width: 64px;
            height: 64px;
          }

          .login-title {
            font-size: 28px;
          }

          .login-subtitle {
            font-size: 14px;
          }

          .form-input {
            font-size: 14px;
            padding: 10px 14px 10px 44px;
          }

          .input-icon {
            width: 18px;
            height: 18px;
            left: 14px;
          }

          .login-button {
            padding: 12px 20px;
            font-size: 14px;
          }

          .demo-code {
            font-size: 12px;
            padding: 4px 10px;
          }
        }

        @media (max-width: 480px) {
          .login-card {
            padding: 28px 20px;
          }

          .login-icon {
            width: 56px;
            height: 56px;
            margin-bottom: 20px;
          }

          .login-title {
            font-size: 24px;
          }

          .login-subtitle {
            font-size: 13px;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .login-card {
          animation: fadeInUp 0.6s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;