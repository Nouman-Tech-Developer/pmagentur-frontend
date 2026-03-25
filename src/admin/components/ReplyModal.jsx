import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';

const ReplyModal = ({ isOpen, onClose, type, record, onReplySent }) => {
  const [replyMessage, setReplyMessage] = useState('');
  const [replySubject, setReplySubject] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSendReply = async () => {
    if (!replyMessage.trim()) {
      setError('Please enter a reply message');
      return;
    }

    if (!replySubject.trim()) {
      setError('Please enter a subject');
      return;
    }

    setSending(true);
    setError('');

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      const response = await fetch('https://your-project.supabase.co/functions/v1/reply-email', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session?.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: type,
          recordId: record.id,
          replyTo: record.email,
          replySubject: replySubject,
          replyMessage: replyMessage,
          adminEmail: session?.user?.email
        })
      });

      if (!response.ok) throw new Error('Failed to send reply');

      onReplySent();
      onClose();
      setReplyMessage('');
      setReplySubject('');
    } catch (err) {
      setError('Failed to send reply. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="reply-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Reply to {record.name}</h2>
          <button onClick={onClose} className="close-btn">×</button>
        </div>
        
        <div className="modal-body">
          <div className="original-message">
            <h4>Original Message:</h4>
            <p><strong>From:</strong> {record.name} ({record.email})</p>
            <p><strong>Message:</strong></p>
            <div className="message-content">{record.message}</div>
          </div>

          <div className="reply-form">
            <div className="form-group">
              <label>Subject *</label>
              <input
                type="text"
                value={replySubject}
                onChange={(e) => setReplySubject(e.target.value)}
                placeholder="Re: Your inquiry about..."
                className="reply-input"
              />
            </div>

            <div className="form-group">
              <label>Your Reply *</label>
              <textarea
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                rows="6"
                placeholder="Type your reply here..."
                className="reply-textarea"
              />
            </div>

            {error && <div className="error-message">{error}</div>}
          </div>
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="btn-secondary">
            Cancel
          </button>
          <button 
            onClick={handleSendReply} 
            className="btn-primary"
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send Reply'}
          </button>
        </div>

        <style jsx="true">{`
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
          
          .reply-modal {
            background: white;
            border-radius: 16px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
          }
          
          .modal-header {
            padding: 20px 24px;
            border-bottom: 1px solid #e5e7eb;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .close-btn {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #6b7280;
          }
          
          .modal-body {
            padding: 24px;
          }
          
          .original-message {
            background: #f9fafb;
            padding: 16px;
            border-radius: 12px;
            margin-bottom: 24px;
          }
          
          .message-content {
            background: white;
            padding: 12px;
            border-radius: 8px;
            margin-top: 8px;
            white-space: pre-wrap;
          }
          
          .form-group {
            margin-bottom: 20px;
          }
          
          .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: #374151;
          }
          
          .reply-input,
          .reply-textarea {
            width: 100%;
            padding: 10px 12px;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            font-family: inherit;
          }
          
          .reply-textarea {
            resize: vertical;
          }
          
          .error-message {
            color: #dc2626;
            margin-top: 12px;
            padding: 8px;
            background: #fee2e2;
            border-radius: 6px;
          }
          
          .modal-footer {
            padding: 16px 24px;
            border-top: 1px solid #e5e7eb;
            display: flex;
            justify-content: flex-end;
            gap: 12px;
          }
          
          .btn-primary,
          .btn-secondary {
            padding: 8px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
          }
          
          .btn-primary {
            background: #000;
            color: white;
            border: none;
          }
          
          .btn-primary:hover:not(:disabled) {
            background: #1f2937;
          }
          
          .btn-primary:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          
          .btn-secondary {
            background: white;
            border: 1px solid #e5e7eb;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ReplyModal;