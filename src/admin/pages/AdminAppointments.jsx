import React, { useState, useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { supabase } from '../../lib/supabase';

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [error, setError] = useState('');

  // Fetch appointments from Supabase
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      setError('');
      
      console.log('Fetching appointments from Supabase...');
      
      const { data, error: fetchError } = await supabase
        .from('appointments')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) {
        console.error('Error fetching appointments:', fetchError);
        setError('Failed to load appointments: ' + fetchError.message);
        throw fetchError;
      }

      console.log('Raw data from Supabase:', data);

      if (data && data.length > 0) {
        // Format dates for display
        const formattedData = data.map(item => ({
          id: item.id,
          name: item.name || 'N/A',
          email: item.email || 'N/A',
          phone: item.phone || 'N/A',
          practice: item.practice || null,
          date: item.date,
          time: item.time || 'Flexible',
          message: item.message || null,
          status: item.status || 'pending',
          created_at: item.created_at,
          createdAt: item.created_at ? new Date(item.created_at).toLocaleDateString('de-DE') : 'N/A',
          displayDate: item.date ? new Date(item.date).toLocaleDateString('de-DE') : 'N/A'
        }));
        
        console.log('Formatted data:', formattedData);
        setAppointments(formattedData);
      } else {
        console.log('No appointments found');
        setAppointments([]);
      }
    } catch (error) {
      console.error('Error in fetchAppointments:', error);
      setError('Unable to load appointments. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      setUpdatingStatus(true);
      setError('');
      
      const { error: updateError } = await supabase
        .from('appointments')
        .update({ status: newStatus })
        .eq('id', id);

      if (updateError) throw updateError;

      // Update local state
      setAppointments(appointments.map(appointment => 
        appointment.id === id ? { ...appointment, status: newStatus } : appointment
      ));

      console.log('Status updated successfully');
    } catch (error) {
      console.error('Error updating status:', error);
      setError('Failed to update status. Please try again.');
    } finally {
      setUpdatingStatus(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      try {
        setError('');
        
        const { error: deleteError } = await supabase
          .from('appointments')
          .delete()
          .eq('id', id);

        if (deleteError) throw deleteError;

        // Update local state
        setAppointments(appointments.filter(appointment => appointment.id !== id));
        
        // Close modal if open
        if (selectedAppointment?.id === id) {
          setShowModal(false);
          setSelectedAppointment(null);
        }
        
        console.log('Appointment deleted successfully');
      } catch (error) {
        console.error('Error deleting appointment:', error);
        setError('Failed to delete appointment. Please try again.');
      }
    }
  };

  const handleViewDetails = (appointment) => {
    setSelectedAppointment(appointment);
    setShowModal(true);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'confirmed': return 'status-badge status-confirmed';
      case 'pending': return 'status-badge status-pending';
      case 'cancelled': return 'status-badge status-cancelled';
      default: return 'status-badge';
    }
  };

  // Truncate message for table view
  const truncateMessage = (message, maxLength = 50) => {
    if (!message) return '-';
    if (message.length <= maxLength) return message;
    return message.substring(0, maxLength) + '...';
  };

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = (appointment.name && appointment.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          (appointment.email && appointment.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          (appointment.phone && appointment.phone.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          (appointment.practice && appointment.practice.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          (appointment.message && appointment.message.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterStatus === 'all' || appointment.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: appointments.length,
    confirmed: appointments.filter(a => a.status === 'confirmed').length,
    pending: appointments.filter(a => a.status === 'pending').length,
    cancelled: appointments.filter(a => a.status === 'cancelled').length
  };

  return (
    <AdminLayout>
      <div className="appointments-page">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Appointments</h1>
          <p className="page-subtitle">Manage and schedule client appointments</p>
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

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <p className="stat-label">Total Appointments</p>
            <p className="stat-value">{stats.total}</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Confirmed</p>
            <p className="stat-value stat-value-confirmed">{stats.confirmed}</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Pending</p>
            <p className="stat-value stat-value-pending">{stats.pending}</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Cancelled</p>
            <p className="stat-value stat-value-cancelled">{stats.cancelled}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="filters-container">
          <div className="search-wrapper">
            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by name, email, phone, practice or message..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="status-filter"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Appointments Table */}
        <div className="table-card">
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">Loading appointments...</p>
            </div>
          ) : (
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Practice</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppointments.length > 0 ? (
                    filteredAppointments.map((appointment) => (
                      <tr key={appointment.id}>
                        <td>
                          <div className="client-name">{appointment.name}</div>
                        </td>
                        <td>
                          <div className="client-email">{appointment.email}</div>
                        </td>
                        <td>
                          <div className="client-phone">{appointment.phone}</div>
                        </td>
                        <td>
                          <div className="practice-name">{appointment.practice || '-'}</div>
                        </td>
                        <td>
                          <div className="appointment-date">{appointment.displayDate}</div>
                        </td>
                        <td>
                          <div className="appointment-time">{appointment.time}</div>
                        </td>
                        <td>
                          <div className="message-preview" title={appointment.message || ''}>
                            {truncateMessage(appointment.message)}
                          </div>
                        </td>
                        <td>
                          <select
                            value={appointment.status}
                            onChange={(e) => handleStatusChange(appointment.id, e.target.value)}
                            className={getStatusColor(appointment.status)}
                            disabled={updatingStatus}
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button
                              onClick={() => handleViewDetails(appointment)}
                              className="action-btn view-btn"
                              title="View Details"
                            >
                              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                            <button
                              onClick={() => handleDelete(appointment.id)}
                              className="action-btn delete-btn"
                              title="Delete"
                            >
                              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="empty-state-cell">
                        <div className="empty-state">
                          <p>No appointments found</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* View Details Modal */}
      {showModal && selectedAppointment && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Appointment Details</h2>
              <button onClick={() => setShowModal(false)} className="modal-close">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="detail-row">
                <div className="detail-item">
                  <label className="detail-label">Name</label>
                  <p className="detail-value">{selectedAppointment.name}</p>
                </div>
                <div className="detail-item">
                  <label className="detail-label">Status</label>
                  <p className={`detail-value ${getStatusColor(selectedAppointment.status)}`} style={{ display: 'inline-block', width: 'auto', padding: '4px 12px' }}>
                    {selectedAppointment.status}
                  </p>
                </div>
              </div>
              <div className="detail-item">
                <label className="detail-label">Email</label>
                <p className="detail-value">{selectedAppointment.email}</p>
              </div>
              <div className="detail-item">
                <label className="detail-label">Phone</label>
                <p className="detail-value">{selectedAppointment.phone}</p>
              </div>
              <div className="detail-item">
                <label className="detail-label">Practice Name</label>
                <p className="detail-value">{selectedAppointment.practice || '-'}</p>
              </div>
              <div className="detail-row">
                <div className="detail-item">
                  <label className="detail-label">Date</label>
                  <p className="detail-value">{selectedAppointment.displayDate}</p>
                </div>
                <div className="detail-item">
                  <label className="detail-label">Time</label>
                  <p className="detail-value">{selectedAppointment.time}</p>
                </div>
              </div>
              <div className="detail-item">
                <label className="detail-label">Message</label>
                <p className="detail-value message-content">{selectedAppointment.message || '-'}</p>
              </div>
              <div className="detail-item">
                <label className="detail-label">Requested On</label>
                <p className="detail-value">{selectedAppointment.createdAt}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={() => setShowModal(false)} className="btn-secondary">
                Close
              </button>
              <button
                onClick={() => {
                  window.location.href = `mailto:${selectedAppointment.email}?subject=Appointment Confirmation&body=Dear ${selectedAppointment.name},%0D%0A%0D%0AYour appointment on ${selectedAppointment.displayDate} at ${selectedAppointment.time} has been ${selectedAppointment.status}.%0D%0A%0D%0AMessage: ${selectedAppointment.message || 'No message provided'}%0D%0A%0D%0ABest regards,%0D%0AReinke AI Team`;
                }}
                className="btn-primary"
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx="true">{`
        .appointments-page {
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
        .page-header {
          margin-bottom: 32px;
        }

        .page-title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 8px 0;
          letter-spacing: -0.02em;
        }

        .page-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 16px;
          color: #6B7280;
          margin: 0;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 32px;
        }

        .stat-card {
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid #E5E5E7;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .stat-label {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #6B7280;
          margin: 0 0 8px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-value {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #111827;
          margin: 0;
        }

        .stat-value-confirmed {
          color: #000000;
        }

        .stat-value-pending {
          color: #6B7280;
        }

        .stat-value-cancelled {
          color: #EF4444;
        }

        /* Filters */
        .filters-container {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
        }

        .search-wrapper {
          flex: 1;
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          color: #9CA3AF;
        }

        .search-input {
          width: 100%;
          padding: 12px 16px 12px 48px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          border: 1px solid #E5E5E7;
          border-radius: 12px;
          background: #FFFFFF;
          transition: all 0.2s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #000000;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
        }

        .status-filter {
          padding: 12px 16px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          border: 1px solid #E5E5E7;
          border-radius: 12px;
          background: #FFFFFF;
          cursor: pointer;
          min-width: 140px;
        }

        .status-filter:focus {
          outline: none;
          border-color: #000000;
        }

        /* Table Card */
        .table-card {
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid #E5E5E7;
          overflow: hidden;
        }

        .table-container {
          overflow-x: auto;
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 1000px;
        }

        .data-table thead {
          background: #F9FAFB;
          border-bottom: 1px solid #E5E5E7;
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
        }

        .data-table td {
          padding: 16px 20px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          border-bottom: 1px solid #E5E5E7;
        }

        .data-table tbody tr:hover {
          background: #F9FAFB;
        }

        .empty-state-cell {
          text-align: center;
          padding: 60px !important;
        }

        /* Client Info */
        .client-name, .practice-name {
          font-size: 14px;
          font-weight: 500;
          color: #111827;
        }

        .client-email, .client-phone {
          font-size: 13px;
          color: #6B7280;
        }

        .appointment-date {
          font-size: 14px;
          font-weight: 500;
          color: #111827;
        }

        .appointment-time {
          font-size: 13px;
          color: #6B7280;
        }

        .message-preview {
          font-size: 13px;
          color: #6B7280;
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* Status Badge */
        .status-badge {
          display: inline-block;
          padding: 6px 12px;
          font-size: 12px;
          font-weight: 600;
          border-radius: 20px;
          border: none;
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
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

        /* Action Buttons */
        .action-buttons {
          display: flex;
          gap: 8px;
        }

        .action-btn {
          padding: 6px;
          background: transparent;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .view-btn {
          color: #6B7280;
        }

        .view-btn:hover {
          color: #000000;
          background: #F3F4F6;
        }

        .delete-btn {
          color: #EF4444;
        }

        .delete-btn:hover {
          background: #FEF2F2;
        }

        /* Loading */
        .loading-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 60px;
          gap: 16px;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #E5E5E7;
          border-top-color: #000000;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        .loading-text {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          color: #6B7280;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 60px;
          color: #6B7280;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-container {
          background: #FFFFFF;
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          animation: fadeInUp 0.3s ease;
        }

        .modal-header {
          padding: 20px 24px;
          border-bottom: 1px solid #E5E5E7;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #111827;
          margin: 0;
        }

        .modal-close {
          background: transparent;
          border: none;
          cursor: pointer;
          color: #9CA3AF;
          transition: color 0.2s ease;
        }

        .modal-close:hover {
          color: #111827;
        }

        .modal-body {
          padding: 24px;
        }

        .detail-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .detail-item {
          margin-bottom: 20px;
        }

        .detail-item:last-child {
          margin-bottom: 0;
        }

        .detail-label {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #6B7280;
          display: block;
          margin-bottom: 8px;
        }

        .detail-value {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          color: #111827;
          margin: 0;
        }

        .message-content {
          background: #F9FAFB;
          padding: 16px;
          border-radius: 12px;
          line-height: 1.6;
          white-space: pre-wrap;
          word-wrap: break-word;
        }

        .modal-footer {
          padding: 16px 24px;
          border-top: 1px solid #E5E5E7;
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }

        .btn-primary, .btn-secondary {
          padding: 10px 20px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-primary {
          background: #000000;
          color: #FFFFFF;
          border: none;
        }

        .btn-primary:hover {
          background: #1F2937;
        }

        .btn-secondary {
          background: #FFFFFF;
          color: #374151;
          border: 1px solid #E5E5E7;
        }

        .btn-secondary:hover {
          background: #F9FAFB;
        }

        /* Animations */
        @keyframes spin {
          to { transform: rotate(360deg); }
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

        /* Responsive */
        @media (max-width: 1200px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 1024px) {
          .appointments-page {
            padding: 24px;
          }

          .stat-value {
            font-size: 28px;
          }
        }

        @media (max-width: 768px) {
          .appointments-page {
            padding: 20px;
          }

          .page-title {
            font-size: 28px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .filters-container {
            flex-direction: column;
          }

          .status-filter {
            width: 100%;
          }

          .data-table th, .data-table td {
            padding: 12px 16px;
          }

          .detail-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        @media (max-width: 640px) {
          .appointments-page {
            padding: 16px;
          }

          .page-title {
            font-size: 24px;
          }

          .data-table th, .data-table td {
            padding: 10px 12px;
            font-size: 13px;
          }
        }
      `}</style>
    </AdminLayout>
  );
};

export default AdminAppointments;