import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  return (
    <div className="admin-layout">
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className={`main-content ${sidebarOpen ? 'with-sidebar-open' : 'with-sidebar-closed'}`}>
        <AdminHeader 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
          onLogout={handleLogout}
        />
        
        <main className="content-area">
          {children}
        </main>
      </div>

      <style jsx="true">{`
        .admin-layout {
          display: flex;
          min-height: 100vh;
          background: #F9FAFB;
        }

        /* Main Content */
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .with-sidebar-open {
          margin-left: 280px;
        }

        .with-sidebar-closed {
          margin-left: 80px;
        }

        /* Content Area */
        .content-area {
          flex: 1;
          overflow-y: auto;
          padding: 0;
        }

        /* Custom Scrollbar */
        .content-area::-webkit-scrollbar {
          width: 8px;
        }

        .content-area::-webkit-scrollbar-track {
          background: #F3F4F6;
        }

        .content-area::-webkit-scrollbar-thumb {
          background: #D1D5DB;
          border-radius: 4px;
        }

        .content-area::-webkit-scrollbar-thumb:hover {
          background: #9CA3AF;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .with-sidebar-open {
            margin-left: 0;
          }

          .with-sidebar-closed {
            margin-left: 0;
          }

          .content-area {
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminLayout;