import React, { useState, useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { supabase } from '../../lib/supabase';

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch contacts from Supabase
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching contacts:', error);
      } else {
        setContacts(data || []);
      }
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact message?')) {
      try {
        const { error } = await supabase
          .from('contacts')
          .delete()
          .eq('id', id);
        
        if (error) {
          console.error('Error deleting:', error);
          alert('Failed to delete message');
        } else {
          fetchContacts(); // Refresh list
        }
      } catch (err) {
        console.error('Error:', err);
        alert('Failed to delete message');
      }
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      const { error } = await supabase
        .from('contacts')
        .update({ status: 'read' })
        .eq('id', id);
      
      if (error) {
        console.error('Error updating status:', error);
      } else {
        fetchContacts(); // Refresh list
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const handleViewDetails = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
    if (contact.status === 'unread') {
      handleMarkAsRead(contact.id);
    }
  };

  const filteredContacts = contacts.filter(contact => 
    contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.message?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status) => {
    if (status === 'unread') {
      return <span className="status-badge status-unread">Unread</span>;
    }
    return <span className="status-badge status-read">Read</span>;
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <AdminLayout>
      <div className="contacts-page">
        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Contact Messages</h1>
          <p className="page-subtitle">Manage and respond to customer inquiries</p>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <p className="stat-label">Total Messages</p>
            <p className="stat-value">{contacts.length}</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Unread</p>
            <p className="stat-value stat-value-unread">
              {contacts.filter(c => c.status === 'unread').length}
            </p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Read</p>
            <p className="stat-value stat-value-read">
              {contacts.filter(c => c.status === 'read').length}
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <div className="search-wrapper">
            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by name, email, or message..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Contacts Table */}
        <div className="table-card">
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
            </div>
          ) : (
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContacts.map((contact) => (
                    <tr key={contact.id}>
                      <td>{getStatusBadge(contact.status)}</td>
                      <td>
                        <div className="contact-name">{contact.name}</div>
                        {contact.company && (
                          <div className="contact-company">{contact.company}</div>
                        )}
                      </td>
                      <td>
                        <div className="contact-email">{contact.email}</div>
                      </td>
                      <td>
                        <div className="contact-phone">{contact.phone || '-'}</div>
                      </td>
                      <td>
                        <div className="contact-message-preview">
                          {contact.message?.substring(0, 60)}...
                        </div>
                      </td>
                      <td>
                        <div className="contact-date">{formatDate(contact.created_at)}</div>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button
                            onClick={() => handleViewDetails(contact)}
                            className="action-btn view-btn"
                            title="View Details"
                          >
                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDelete(contact.id)}
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
                  ))}
                </tbody>
              </table>
              {filteredContacts.length === 0 && (
                <div className="empty-state">
                  <p>No contacts found</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* View Details Modal */}
      {showModal && selectedContact && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Message Details</h2>
              <button onClick={() => setShowModal(false)} className="modal-close">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="detail-item">
                <label className="detail-label">Name</label>
                <p className="detail-value">{selectedContact.name}</p>
              </div>
              {selectedContact.company && (
                <div className="detail-item">
                  <label className="detail-label">Company</label>
                  <p className="detail-value">{selectedContact.company}</p>
                </div>
              )}
              <div className="detail-item">
                <label className="detail-label">Email</label>
                <p className="detail-value">{selectedContact.email}</p>
              </div>
              <div className="detail-item">
                <label className="detail-label">Phone</label>
                <p className="detail-value">{selectedContact.phone || '-'}</p>
              </div>
              <div className="detail-item">
                <label className="detail-label">Date</label>
                <p className="detail-value">{formatDateTime(selectedContact.created_at)}</p>
              </div>
              <div className="detail-item">
                <label className="detail-label">Message</label>
                <p className="detail-value message-content">{selectedContact.message}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={() => setShowModal(false)} className="btn-secondary">
                Close
              </button>
              <button
                onClick={() => {
                  window.location.href = `mailto:${selectedContact.email}?subject=Re: ${selectedContact.name}&body=Hello ${selectedContact.name},\n\nThank you for contacting us.\n\n${selectedContact.message ? `Regarding your message: "${selectedContact.message.substring(0, 100)}..."\n\n` : ''}We will get back to you shortly.\n\nBest regards,\nReinke AI Team`;
                }}
                className="btn-primary"
              >
                Reply via Email
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx="true">{`
        .contacts-page {
          padding: 32px;
          max-width: 1600px;
          margin: 0 auto;
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
          grid-template-columns: repeat(3, 1fr);
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

        .stat-value-unread {
          color: #000000;
        }

        .stat-value-read {
          color: #6B7280;
        }

        /* Search */
        .search-container {
          margin-bottom: 24px;
        }

        .search-wrapper {
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

        /* Status Badges */
        .status-badge {
          display: inline-block;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 600;
          border-radius: 20px;
        }

        .status-unread {
          background: #000000;
          color: #FFFFFF;
        }

        .status-read {
          background: #F3F4F6;
          color: #6B7280;
        }

        /* Contact Info */
        .contact-name {
          font-size: 14px;
          font-weight: 500;
          color: #111827;
        }

        .contact-company {
          font-size: 12px;
          color: #9CA3AF;
          margin-top: 2px;
        }

        .contact-email, .contact-phone {
          font-size: 14px;
          color: #6B7280;
        }

        .contact-message-preview {
          font-size: 14px;
          color: #4B5563;
          max-width: 250px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .contact-date {
          font-size: 14px;
          color: #6B7280;
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
          to { transform: rotate(360deg); }
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

        .detail-item {
          margin-bottom: 20px;
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

        /* Responsive */
        @media (max-width: 1024px) {
          .contacts-page {
            padding: 24px;
          }

          .stats-grid {
            gap: 16px;
          }

          .stat-value {
            font-size: 28px;
          }
        }

        @media (max-width: 768px) {
          .contacts-page {
            padding: 20px;
          }

          .page-title {
            font-size: 28px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .data-table th, .data-table td {
            padding: 12px 16px;
          }

          .contact-message-preview {
            max-width: 150px;
          }
        }

        @media (max-width: 640px) {
          .contacts-page {
            padding: 16px;
          }

          .page-title {
            font-size: 24px;
          }

          .data-table th, .data-table td {
            padding: 10px 12px;
            font-size: 13px;
          }

          .contact-message-preview {
            display: none;
          }
        }
      `}</style>
    </AdminLayout>
  );
};

export default AdminContacts;