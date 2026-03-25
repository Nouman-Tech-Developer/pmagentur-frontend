import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  const menuItems = [
    { 
      path: '/admin/dashboard', 
      name: 'Dashboard', 
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      path: '/admin/contacts', 
      name: 'Contacts', 
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      path: '/admin/appointments', 
      name: 'Appointments', 
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
    path: '/admin/calculator', 
    name: 'Calculator',  // 🔥 NEW
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  // Add to your sidebar menu items
{
  name: 'Settings',
  path: '/admin/settings',
  icon: (
    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <aside className={`admin-sidebar ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {/* Logo Area */}
        <div className="sidebar-logo">
          {sidebarOpen ? (
            <h1 className="logo-text">Admin Panel</h1>
          ) : (
            <div className="logo-icon">⚡</div>
          )}
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive(item.path) ? 'nav-item-active' : ''}`}
              title={!sidebarOpen ? item.name : ''}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-text">{item.name}</span>}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          {sidebarOpen ? (
            <p className="footer-text">© 2024</p>
          ) : (
            <div className="footer-icon">©</div>
          )}
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <style jsx="true">{`
        .admin-sidebar {
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          background: #FFFFFF;
          border-right: 1px solid #E5E5E7;
          display: flex;
          flex-direction: column;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
          overflow-y: auto;
        }

        .sidebar-open {
          width: 280px;
        }

        .sidebar-closed {
          width: 80px;
        }

        /* Logo Area */
        .sidebar-logo {
          padding: 24px 20px;
          border-bottom: 1px solid #E5E5E7;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: #000000;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        /* Navigation */
        .sidebar-nav {
          flex: 1;
          padding: 24px 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s ease;
          color: #6B7280;
        }

        .nav-item:hover {
          background: #F3F4F6;
          color: #111827;
        }

        .nav-item-active {
          background: #000000;
          color: #FFFFFF;
        }

        .nav-item-active:hover {
          background: #000000;
          color: #FFFFFF;
        }

        .nav-icon {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .nav-icon svg {
          width: 20px;
          height: 20px;
        }

        .nav-text {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
        }

        /* Footer */
        .sidebar-footer {
          padding: 20px;
          border-top: 1px solid #E5E5E7;
          text-align: center;
        }

        .footer-text {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 12px;
          color: #9CA3AF;
          margin: 0;
        }

        .footer-icon {
          font-size: 12px;
          color: #9CA3AF;
        }

        /* Mobile Overlay */
        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          display: none;
        }

        /* Scrollbar */
        .admin-sidebar::-webkit-scrollbar {
          width: 4px;
        }

        .admin-sidebar::-webkit-scrollbar-track {
          background: #F3F4F6;
        }

        .admin-sidebar::-webkit-scrollbar-thumb {
          background: #D1D5DB;
          border-radius: 4px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .sidebar-open {
            width: 280px;
            box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
          }

          .sidebar-closed {
            transform: translateX(-100%);
          }

          .sidebar-overlay {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default AdminSidebar;