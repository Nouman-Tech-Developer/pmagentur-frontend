import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../../lib/supabase';

const AppointmentBooking = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    date: '',
    message: ''
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [showMoreDates, setShowMoreDates] = useState(false);

  // Generate next 14 days (2 weeks)
  const getWeekDays = (weeks = 1) => {
    const days = [];
    const today = new Date();
    const daysToShow = weeks === 1 ? 7 : 14;
    
    for (let i = 0; i < daysToShow; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const weekDays = getWeekDays(1);
  const nextWeekDays = getWeekDays(2);

  const formatDate = (date) => {
    return {
      day: date.toLocaleDateString('de-DE', { weekday: 'short' }),
      date: date.getDate(),
      month: date.toLocaleDateString('de-DE', { month: 'short' }),
      full: date.toLocaleDateString('de-DE', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    };
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // Format date as YYYY-MM-DD for database
    const formattedDate = date.toISOString().split('T')[0];
    setFormData({ ...formData, date: formattedDate });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError(t('appointment.messages.fillAllFields'));
      setLoading(false);
      return;
    }

    if (!formData.date) {
      setError(t('appointment.messages.selectDate'));
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError(t('appointment.messages.validEmail'));
      setLoading(false);
      return;
    }

    try {
      // Prepare data exactly matching your table schema
      const appointmentData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        date: formData.date,
        time: 'Flexible', // Required field, set to 'Flexible' since no time selection
        message: formData.message || null,
        status: 'pending'
      };

      console.log('Sending data to Supabase:', appointmentData);

      const { data, error: supabaseError } = await supabase
        .from('appointments')
        .insert([appointmentData])
        .select();

      if (supabaseError) {
        console.error('Supabase Error Details:', supabaseError);
        throw new Error(supabaseError.message);
      }

      console.log('Appointment created successfully:', data);
      setSuccess(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          practice: '',
          date: '',
          message: ''
        });
        setSelectedDate(null);
      }, 5000);
      
    } catch (err) {
      console.error('Error:', err);
      setError(`${t('appointment.messages.error')} ${err.message || ''}`);
    } finally {
      setLoading(false);
    }
  };

  // Function to check if date is weekend
  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  // Get formatted selected date string
  const getSelectedDateString = () => {
    if (!selectedDate) return '';
    return selectedDate.toLocaleDateString('de-DE', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section className="appointment-section">
      <div className="appointment-container">
        <div className="appointment-header">
          <h2 className="appointment-title">
            {t('appointment.title')}
          </h2>
          <p className="appointment-subtitle">
            {t('appointment.subtitle')}
          </p>
        </div>

        <div className="appointment-content">
          {/* Left Column - Form */}
          <div className="form-column">
            <form onSubmit={handleSubmit} className="booking-form">
              {error && (
                <div className="error-message">
                  <svg className="error-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}
              
              {success && (
                <div className="success-message">
                  <svg className="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{t('appointment.messages.success', { email: formData.email })}</span>
                </div>
              )}
              
              <div className="form-group">
                <label>{t('appointment.form.name')}</label>
                <input
                  type="text"
                  name="name"
                  placeholder={t('appointment.form.namePlaceholder')}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>{t('appointment.form.email')}</label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t('appointment.form.emailPlaceholder')}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>{t('appointment.form.phone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t('appointment.form.phonePlaceholder')}
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>{t('appointment.form.practice')}</label>
                <input
                  type="text"
                  name="practice"
                  placeholder={t('appointment.form.practicePlaceholder')}
                  value={formData.practice}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label>{t('appointment.form.message')}</label>
                <textarea
                  name="message"
                  placeholder={t('appointment.form.messagePlaceholder')}
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </div>

          {/* Right Column - Calendar */}
          <div className="calendar-column">
            <h3 className="calendar-title">{t('appointment.calendar.title')}</h3>
            
            {/* First Week */}
            <div className="week-section">
              <h4 className="week-title">{t('appointment.calendar.thisWeek')}</h4>
              <div className="week-days">
                {weekDays.map((day, idx) => {
                  const dateInfo = formatDate(day);
                  const isSelected = selectedDate?.toDateString() === day.toDateString();
                  const isWeekendDay = isWeekend(day);
                  return (
                    <button
                      key={idx}
                      className={`day-card ${isSelected ? 'selected' : ''} ${isWeekendDay ? 'weekend' : ''}`}
                      onClick={() => handleDateSelect(day)}
                      disabled={isWeekendDay}
                    >
                      <span className="day-weekday">{dateInfo.day}</span>
                      <span className="day-number">{dateInfo.date}</span>
                      <span className="day-month">{dateInfo.month}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Next Week */}
            {showMoreDates && (
              <div className="week-section">
                <h4 className="week-title">{t('appointment.calendar.nextWeek')}</h4>
                <div className="week-days">
                  {nextWeekDays.map((day, idx) => {
                    const dateInfo = formatDate(day);
                    const isSelected = selectedDate?.toDateString() === day.toDateString();
                    const isWeekendDay = isWeekend(day);
                    return (
                      <button
                        key={idx}
                        className={`day-card ${isSelected ? 'selected' : ''} ${isWeekendDay ? 'weekend' : ''}`}
                        onClick={() => handleDateSelect(day)}
                        disabled={isWeekendDay}
                      >
                        <span className="day-weekday">{dateInfo.day}</span>
                        <span className="day-number">{dateInfo.date}</span>
                        <span className="day-month">{dateInfo.month}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Show More/Less Buttons */}
            {!showMoreDates && (
              <button 
                className="show-more-btn"
                onClick={() => setShowMoreDates(true)}
              >
                {t('appointment.calendar.showMore')}
              </button>
            )}

            {showMoreDates && (
              <button 
                className="show-less-btn"
                onClick={() => setShowMoreDates(false)}
              >
                {t('appointment.calendar.showLess')}
              </button>
            )}
            
            {/* Selected Info */}
            {selectedDate && (
              <div className="selected-info">
                <div className="info-icon">✓</div>
                <div className="info-text">
                  <strong>{t('appointment.calendar.selectedDate')}:</strong> {getSelectedDateString()}
                </div>
              </div>
            )}

            {!selectedDate && (
              <div className="info-note">
                <svg className="info-note-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('appointment.calendar.selectDateFirst')}</span>
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="submit-section">
          <button 
            className="submit-button" 
            onClick={handleSubmit} 
            disabled={loading || success || !selectedDate}
          >
            {loading ? t('appointment.buttons.submitting') : success ? t('appointment.buttons.confirmed') : t('appointment.buttons.submit')}
          </button>
          <p className="form-note">
            {t('appointment.messages.note')}
          </p>
        </div>
      </div>

      <style jsx="true">{`
        .appointment-section {
          width: 100%;
          padding: 60px 100px;
          background: #FFFFFF;
          position: relative;
        }
        
        .appointment-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .appointment-header {
          text-align: center;
          margin-bottom: 48px;
        }
        
        .appointment-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 48px;
          font-weight: 700;
          color: #000000;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }
        
        .appointment-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          line-height: 1.6;
          color: #6B7280;
          margin: 0;
        }
        
        .appointment-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          margin-bottom: 40px;
        }
        
        .form-column {
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        
        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .form-group label {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
        }
        
        .form-group input,
        .form-group textarea {
          padding: 12px 16px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 15px;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          background: #FFFFFF;
          transition: all 0.2s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #000000;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 80px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        
        .calendar-column {
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        
        .calendar-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #000000;
          margin: 0 0 24px 0;
        }
        
        .week-section {
          margin-bottom: 24px;
        }
        
        .week-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #6B7280;
          margin: 0 0 12px 0;
        }
        
        .week-days {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 12px;
        }
        
        .day-card {
          background: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 12px 8px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .day-card:hover:not(:disabled) {
          border-color: #000000;
          transform: translateY(-2px);
        }
        
        .day-card.selected {
          background: #000000;
          border-color: #000000;
        }
        
        .day-card.selected .day-weekday,
        .day-card.selected .day-number,
        .day-card.selected .day-month {
          color: #FFFFFF;
        }
        
        .day-card.weekend {
          opacity: 0.5;
          cursor: not-allowed;
          background: #F3F4F6;
        }
        
        .day-weekday {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #6B7280;
          display: block;
        }
        
        .day-number {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #000000;
          display: block;
          margin: 4px 0;
        }
        
        .day-month {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 10px;
          color: #9CA3AF;
        }
        
        .show-more-btn, .show-less-btn {
          width: 100%;
          background: transparent;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 10px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #000000;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-bottom: 24px;
        }
        
        .show-more-btn:hover, .show-less-btn:hover {
          background: #F9FAFB;
          border-color: #000000;
        }
        
        .selected-info {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #F3F4F6;
          padding: 12px 16px;
          border-radius: 12px;
          margin-top: 20px;
        }
        
        .info-icon {
          width: 24px;
          height: 24px;
          background: #10B981;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }
        
        .info-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          color: #374151;
        }
        
        .info-text strong {
          color: #000000;
        }
        
        .info-note {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #F9FAFB;
          padding: 16px;
          border-radius: 12px;
          margin-top: 20px;
          text-align: center;
          justify-content: center;
        }
        
        .info-note-icon {
          width: 20px;
          height: 20px;
          color: #9CA3AF;
        }
        
        .info-note span {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 13px;
          color: #6B7280;
        }
        
        .submit-section {
          text-align: center;
          margin-top: 20px;
        }
        
        .submit-button {
          background: #000000;
          color: white;
          padding: 14px 40px;
          border: none;
          border-radius: 40px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 280px;
        }
        
        .submit-button:hover:not(:disabled) {
          background: #1F2937;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        
        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .form-note {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 12px;
          color: #9CA3AF;
          margin: 16px 0 0 0;
        }
        
        .error-message, .success-message {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          margin-bottom: 20px;
          animation: slideIn 0.3s ease;
        }
        
        .error-message {
          background: #FEE2E2;
          border: 1px solid #FECACA;
          color: #991B1B;
        }
        
        .success-message {
          background: #D1FAE5;
          border: 1px solid #A7F3D0;
          color: #065F46;
        }
        
        .error-icon, .success-icon {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 1024px) {
          .appointment-section {
            padding: 50px 60px;
          }
          .appointment-title {
            font-size: 40px;
          }
        }
        
        @media (max-width: 900px) {
          .appointment-content {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
        
        @media (max-width: 768px) {
          .appointment-section {
            padding: 40px 24px;
          }
          .appointment-title {
            font-size: 32px;
          }
          .appointment-subtitle {
            font-size: 16px;
          }
          .form-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .week-days {
            gap: 8px;
            overflow-x: auto;
          }
          .day-number {
            font-size: 16px;
          }
          .submit-button {
            width: 100%;
          }
        }
        
        @media (max-width: 480px) {
          .appointment-section {
            padding: 30px 16px;
          }
          .appointment-title {
            font-size: 28px;
          }
          .form-column, .calendar-column {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default AppointmentBooking;