import React, { useState, useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import StatsCard from '../components/StatsCard';
import { supabase } from '../../lib/supabase';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalContacts: 0,
    totalAppointments: 0,
    pendingAppointments: 0,
    confirmedAppointments: 0,
    cancelledAppointments: 0,
    unreadContacts: 0
  });
  const [recentContacts, setRecentContacts] = useState([]);
  const [recentAppointments, setRecentAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError('');

      // Fetch all contacts
      const { data: contactsData, error: contactsError } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (contactsError) throw contactsError;

      // Fetch all appointments
      const { data: appointmentsData, error: appointmentsError } = await supabase
        .from('appointments')
        .select('*')
        .order('created_at', { ascending: false });

      if (appointmentsError) throw appointmentsError;

      // Calculate stats
      const totalAppointments = appointmentsData?.length || 0;
      const pendingAppointments = appointmentsData?.filter(a => a.status === 'pending').length || 0;
      const confirmedAppointments = appointmentsData?.filter(a => a.status === 'confirmed').length || 0;
      const cancelledAppointments = appointmentsData?.filter(a => a.status === 'cancelled').length || 0;
      
      const totalContacts = contactsData?.length || 0;
      const unreadContacts = contactsData?.filter(c => c.status === 'unread').length || 0;

      setStats({
        totalContacts: totalContacts,
        totalAppointments: totalAppointments,
        pendingAppointments: pendingAppointments,
        confirmedAppointments: confirmedAppointments,
        cancelledAppointments: cancelledAppointments,
        unreadContacts: unreadContacts
      });

      // Format recent contacts (limit to 5)
      const formattedContacts = contactsData?.slice(0, 5).map(contact => ({
        id: contact.id,
        name: contact.name || 'N/A',
        email: contact.email || 'N/A',
        phone: contact.phone || 'N/A',
        company: contact.company || null,
        message: contact.message || 'No message',
        status: contact.status || 'unread',
        date: contact.created_at ? new Date(contact.created_at).toLocaleDateString('de-DE') : 'N/A'
      })) || [];

      setRecentContacts(formattedContacts);

      // Format recent appointments (limit to 5)
      const formattedAppointments = appointmentsData?.slice(0, 5).map(appointment => ({
        id: appointment.id,
        name: appointment.name || 'N/A',
        email: appointment.email || 'N/A',
        phone: appointment.phone || 'N/A',
        date: appointment.date ? new Date(appointment.date).toLocaleDateString('de-DE') : 'N/A',
        time: appointment.time || 'Flexible',
        message: appointment.message || null,
        status: appointment.status || 'pending'
      })) || [];

      setRecentAppointments(formattedAppointments);

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setError('Failed to load dashboard data. Please refresh the page.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'confirmed': return 'status-confirmed';
      case 'pending': return 'status-pending';
      case 'cancelled': return 'status-cancelled';
      case 'unread': return 'status-unread';
      case 'read': return 'status-read';
      default: return 'status-default';
    }
  };

  const getContactStatusColor = (status) => {
    switch(status) {
      case 'unread': return 'status-unread';
      case 'read': return 'status-read';
      default: return 'status-default';
    }
  };

  return (
    <AdminLayout>
      <div className="admin-dashboard">
        {/* Header */}
        <div className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Welcome back! Here's what's happening with your website.</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="error-banner">
            <svg className="error-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
            <button onClick={() => setError('')} className="error-close">×</button>
          </div>
        )}

        {/* Stats Cards - 4 in one line */}
        <div className="stats-grid">
          <StatsCard 
            title="Total Contacts"
            value={stats.totalContacts}
            icon="messages"
            subtext={`${stats.unreadContacts} unread`}
            change={stats.totalContacts > 0 ? "+" + stats.totalContacts : "0"}
          />
          <StatsCard 
            title="Total Appointments"
            value={stats.totalAppointments}
            icon="calendar"
            change={stats.totalAppointments > 0 ? "+" + stats.totalAppointments : "0"}
          />
          <StatsCard 
            title="Pending Appointments"
            value={stats.pendingAppointments}
            icon="pending"
            change={stats.pendingAppointments > 0 ? stats.pendingAppointments : "0"}
          />
          <StatsCard 
            title="Confirmed Appointments"
            value={stats.confirmedAppointments}
            icon="confirmed"
            change={stats.confirmedAppointments > 0 ? "+" + stats.confirmedAppointments : "0"}
          />
        </div>

        {/* Recent Contacts and Appointments */}
        <div className="recent-grid">
          {/* Recent Contacts */}
          <div className="recent-card">
            <div className="card-header">
              <h2 className="card-title">Recent Contacts</h2>
              <a href="/admin/contacts" className="view-link">View All →</a>
            </div>
            {loading ? (
              <div className="loading-spinner-container">
                <div className="loading-spinner"></div>
              </div>
            ) : recentContacts.length === 0 ? (
              <div className="empty-state">
                <svg className="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p>No contacts yet</p>
              </div>
            ) : (
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Message</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentContacts.map((contact) => (
                      <tr key={contact.id}>
                        <td>
                          <div className="contact-info">
                            <div className="contact-name">{contact.name}</div>
                            <div className="contact-email">{contact.email}</div>
                            {contact.phone && <div className="contact-phone">{contact.phone}</div>}
                          </div>
                        </td>
                        <td>
                          <div className="contact-message" title={contact.message}>
                            {contact.message.length > 60 ? contact.message.substring(0, 60) + '...' : contact.message}
                          </div>
                        </td>
                        <td>
                          <span className={`status-badge ${getContactStatusColor(contact.status)}`}>
                            {contact.status}
                          </span>
                        </td>
                        <td>
                          <div className="contact-date">{contact.date}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Recent Appointments */}
          <div className="recent-card">
            <div className="card-header">
              <h2 className="card-title">Recent Appointments</h2>
              <a href="/admin/appointments" className="view-link">View All →</a>
            </div>
            {loading ? (
              <div className="loading-spinner-container">
                <div className="loading-spinner"></div>
              </div>
            ) : recentAppointments.length === 0 ? (
              <div className="empty-state">
                <svg className="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p>No appointments yet</p>
              </div>
            ) : (
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Client</th>
                      <th>Date & Time</th>
                      <th>Message</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentAppointments.map((appointment) => (
                      <tr key={appointment.id}>
                        <td>
                          <div className="contact-info">
                            <div className="contact-name">{appointment.name}</div>
                            <div className="contact-email">{appointment.email}</div>
                            {appointment.phone && <div className="contact-phone">{appointment.phone}</div>}
                          </div>
                        </td>
                        <td>
                          <div className="appointment-date">{appointment.date}</div>
                          <div className="appointment-time">{appointment.time}</div>
                        </td>
                        <td>
                          <div className="contact-message" title={appointment.message || ''}>
                            {appointment.message ? (appointment.message.length > 50 ? appointment.message.substring(0, 50) + '...' : appointment.message) : '-'}
                          </div>
                        </td>
                        <td>
                          <span className={`status-badge ${getStatusColor(appointment.status)}`}>
                            {appointment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .admin-dashboard {
          padding: 32px;
          max-width: 1600px;
          margin: 0 auto;
        }

        /* Error Banner */
        .error-banner {
          background: #FEF2F2;
          border: 1px solid #FEE2E2;
          border-radius: 12px;
          padding: 12px 16px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #991B1B;
        }

        .error-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        .error-close {
          margin-left: auto;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: #991B1B;
        }

        /* Header Styles */
        .dashboard-header {
          margin-bottom: 40px;
        }

        .dashboard-title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 8px 0;
          letter-spacing: -0.02em;
        }

        .dashboard-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 16px;
          color: #6B7280;
          margin: 0;
        }

        /* Stats Grid - 4 cards in one line */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        /* Recent Grid */
        .recent-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        /* Recent Card */
        .recent-card {
          background: #FFFFFF;
          border-radius: 20px;
          border: 1px solid #E5E5E7;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .recent-card:hover {
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .card-header {
          padding: 20px 24px;
          border-bottom: 1px solid #E5E5E7;
          background: #FFFFFF;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #111827;
          margin: 0;
        }

        .view-link {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #000000;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .view-link:hover {
          color: #374151;
        }

        /* Table Styles */
        .table-container {
          overflow-x: auto;
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
        }

        .data-table thead {
          background: #F9FAFB;
        }

        .data-table th {
          padding: 16px 20px;
          text-align: left;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #6B7280;
          border-bottom: 1px solid #E5E5E7;
        }

        .data-table td {
          padding: 16px 20px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          border-bottom: 1px solid #E5E5E7;
        }

        .data-table tbody tr {
          transition: background-color 0.2s ease;
        }

        .data-table tbody tr:hover {
          background: #F9FAFB;
        }

        /* Contact Info */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .contact-name {
          font-size: 14px;
          font-weight: 600;
          color: #111827;
        }

        .contact-email {
          font-size: 12px;
          color: #6B7280;
        }

        .contact-phone {
          font-size: 12px;
          color: #9CA3AF;
        }

        .contact-message {
          font-size: 13px;
          color: #4B5563;
          max-width: 250px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .contact-date {
          font-size: 13px;
          color: #6B7280;
        }

        .appointment-date {
          font-size: 14px;
          font-weight: 500;
          color: #111827;
        }

        .appointment-time {
          font-size: 12px;
          color: #6B7280;
          margin-top: 2px;
        }

        /* Status Badges */
        .status-badge {
          display: inline-block;
          padding: 4px 10px;
          font-size: 12px;
          font-weight: 600;
          border-radius: 20px;
          text-transform: capitalize;
        }

        .status-confirmed {
          background: #000000;
          color: #FFFFFF;
        }

        .status-pending {
          background: #F3F4F6;
          color: #6B7280;
          border: 1px solid #E5E5E7;
        }

        .status-cancelled {
          background: #FEF2F2;
          color: #EF4444;
          border: 1px solid #FEE2E2;
        }

        .status-unread {
          background: #FEF3C7;
          color: #D97706;
          border: 1px solid #FDE68A;
        }

        .status-read {
          background: #D1FAE5;
          color: #059669;
          border: 1px solid #A7F3D0;
        }

        .status-default {
          background: #F3F4F6;
          color: #6B7280;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 60px;
          color: #6B7280;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        .empty-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 16px;
          color: #D1D5DB;
        }

        /* Loading Spinner */
        .loading-spinner-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #E5E5E7;
          border-top-color: #000000;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .admin-dashboard {
            padding: 24px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 1024px) {
          .recent-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .dashboard-title {
            font-size: 32px;
          }
        }

        @media (max-width: 768px) {
          .admin-dashboard {
            padding: 20px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .dashboard-title {
            font-size: 28px;
          }

          .dashboard-subtitle {
            font-size: 14px;
          }

          .card-header {
            padding: 16px 20px;
          }

          .card-title {
            font-size: 16px;
          }

          .data-table th,
          .data-table td {
            padding: 12px 16px;
          }

          .contact-message {
            max-width: 150px;
          }
        }

        @media (max-width: 640px) {
          .admin-dashboard {
            padding: 16px;
          }

          .dashboard-header {
            margin-bottom: 24px;
          }

          .dashboard-title {
            font-size: 24px;
          }

          .data-table th,
          .data-table td {
            padding: 10px 12px;
            font-size: 13px;
          }

          .contact-name {
            font-size: 13px;
          }

          .contact-email {
            font-size: 11px;
          }

          .contact-message {
            max-width: 120px;
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .admin-dashboard {
            padding: 12px;
          }

          .stats-grid {
            gap: 12px;
          }

          .card-header {
            padding: 12px 16px;
          }

          .data-table th,
          .data-table td {
            padding: 8px 12px;
          }

          .contact-message {
            display: none;
          }
        }

        /* Animation */
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

        .recent-card {
          animation: fadeInUp 0.5s ease forwards;
        }

        .recent-card:first-child {
          animation-delay: 0.1s;
        }

        .recent-card:last-child {
          animation-delay: 0.2s;
        }
      `}</style>
    </AdminLayout>
  );
};

export default AdminDashboard;