import React, { useState, useEffect } from 'react';

const AdminHeader = ({ sidebarOpen, setSidebarOpen, onLogout }) => {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('adminUser');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <>
      <header className="admin-header">
        <div className="header-container">
          {/* Left - Menu Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="menu-toggle"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Center - Page Title (optional) */}
          <div className="header-title">
            <span className="title-text">Admin Dashboard</span>
          </div>

          {/* Right - User Menu */}
          <div className="user-menu">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="user-button"
            >
              <div className="user-avatar">
                {user?.username ? user.username.charAt(0).toUpperCase() : 'A'}
              </div>
              <span className="user-name">{user?.username || 'Admin'}</span>
              <svg className="dropdown-arrow" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={onLogout} className="dropdown-item">
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <style jsx="true">{`
        .admin-header {
          background: #FFFFFF;
          border-bottom: 1px solid #E5E5E7;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 24px;
          max-width: 100%;
        }

        /* Menu Toggle */
        .menu-toggle {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6B7280;
          transition: all 0.2s ease;
        }

        .menu-toggle:hover {
          background: #F3F4F6;
          color: #111827;
        }

        /* Header Title */
        .header-title {
          flex: 1;
          text-align: center;
        }

        .title-text {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #111827;
        }

        /* User Menu */
        .user-menu {
          position: relative;
        }

        .user-button {
          display: flex;
          align-items: center;
          gap: 12px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 6px 12px;
          border-radius: 40px;
          transition: all 0.2s ease;
        }

        .user-button:hover {
          background: #F3F4F6;
        }

        .user-avatar {
          width: 36px;
          height: 36px;
          background: #000000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          font-weight: 600;
        }

        .user-name {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
        }

        .dropdown-arrow {
          color: #9CA3AF;
          transition: transform 0.2s ease;
        }

        .user-button:hover .dropdown-arrow {
          transform: rotate(180deg);
        }

        /* Dropdown Menu */
        .dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: #FFFFFF;
          border: 1px solid #E5E5E7;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          min-width: 160px;
          overflow: hidden;
          animation: fadeInDown 0.2s ease;
          z-index: 1000;
        }

        .dropdown-item {
          width: 100%;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #EF4444;
          transition: all 0.2s ease;
        }

        .dropdown-item:hover {
          background: #FEF2F2;
        }

        /* Animation */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .header-container {
            padding: 10px 16px;
          }

          .user-name {
            display: none;
          }

          .title-text {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .header-container {
            padding: 8px 12px;
          }

          .user-avatar {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default AdminHeader;