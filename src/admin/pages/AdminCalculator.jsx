import React, { useState, useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { supabase } from '../../lib/supabase';

const AdminCalculator = () => {
  const [settings, setSettings] = useState({
    defaultEmployees: 3,
    defaultHourlyRate: 25,
    defaultDailyCalls: 80,
    defaultAvgCallDuration: 4,
    botCallPercentage: 80,
    botAnnualCost: 6000,
    workingDaysPerYear: 240,
    hourlyWorkHours: 8,
    isEnabled: true
  });
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  // Fetch settings from Supabase
  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('calculator_settings')
        .select('*')
        .single();
      
      if (error) {
        console.error('Error fetching settings:', error);
        // If no data, insert default
        if (error.code === 'PGRST116') {
          await insertDefaultSettings();
        }
      } else if (data) {
        setSettings({
          defaultEmployees: data.default_employees,
          defaultHourlyRate: data.default_hourly_rate,
          defaultDailyCalls: data.default_daily_calls,
          defaultAvgCallDuration: data.default_avg_call_duration,
          botCallPercentage: data.bot_call_percentage,
          botAnnualCost: data.bot_annual_cost,
          workingDaysPerYear: data.working_days_per_year,
          hourlyWorkHours: data.hourly_work_hours,
          isEnabled: data.is_enabled
        });
      }
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const insertDefaultSettings = async () => {
    const { error } = await supabase
      .from('calculator_settings')
      .insert([
        {
          default_employees: 3,
          default_hourly_rate: 25,
          default_daily_calls: 80,
          default_avg_call_duration: 4,
          bot_call_percentage: 80,
          bot_annual_cost: 6000,
          working_days_per_year: 240,
          hourly_work_hours: 8,
          is_enabled: true
        }
      ]);
    
    if (error) {
      console.error('Error inserting default settings:', error);
    } else {
      fetchSettings();
    }
  };

  const handleChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    
    try {
      const { error } = await supabase
        .from('calculator_settings')
        .update({
          default_employees: settings.defaultEmployees,
          default_hourly_rate: settings.defaultHourlyRate,
          default_daily_calls: settings.defaultDailyCalls,
          default_avg_call_duration: settings.defaultAvgCallDuration,
          bot_call_percentage: settings.botCallPercentage,
          bot_annual_cost: settings.botAnnualCost,
          working_days_per_year: settings.workingDaysPerYear,
          hourly_work_hours: settings.hourlyWorkHours,
          is_enabled: settings.isEnabled,
          updated_at: new Date()
        })
        .eq('id', 1);
      
      if (error) {
        throw error;
      }
      
      setMessage({ type: 'success', text: 'Settings saved successfully!' });
    } catch (error) {
      console.error('Error saving settings:', error);
      setMessage({ type: 'error', text: 'Failed to save settings. Please try again.' });
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const handleReset = () => {
    setSettings({
      defaultEmployees: 3,
      defaultHourlyRate: 25,
      defaultDailyCalls: 80,
      defaultAvgCallDuration: 4,
      botCallPercentage: 80,
      botAnnualCost: 6000,
      workingDaysPerYear: 240,
      hourlyWorkHours: 8,
      isEnabled: true
    });
    setMessage({ type: 'info', text: 'Reset to default values. Click Save to apply.' });
    setTimeout(() => setMessage(null), 3000);
  };

  const calculatePreview = () => {
    const minutesPerDay = settings.defaultDailyCalls * settings.defaultAvgCallDuration;
    const hoursPerDay = minutesPerDay / 60;
    const annualEmployeeCost = settings.defaultEmployees * settings.hourlyWorkHours * settings.defaultHourlyRate * settings.workingDaysPerYear;
    const botCallPercentageDecimal = settings.botCallPercentage / 100;
    const annualSavings = (annualEmployeeCost * botCallPercentageDecimal) - settings.botAnnualCost;
    const savingsPercentage = Math.round((annualSavings / annualEmployeeCost) * 100);
    
    return {
      minutesPerDay: Math.round(minutesPerDay),
      hoursPerDay: hoursPerDay.toFixed(1),
      annualEmployeeCost: Math.round(annualEmployeeCost),
      annualSavings: Math.round(annualSavings),
      savingsPercentage: savingsPercentage
    };
  };

  const preview = calculatePreview();

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading settings...</p>
        </div>
        <style jsx="true">{`
          .loading-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 400px;
            gap: 20px;
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
          p {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #6B7280;
          }
        `}</style>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="calculator-admin">
        <div className="page-header">
          <h1 className="page-title">Calculator Settings</h1>
          <p className="page-subtitle">Configure the savings calculator parameters that users will see</p>
        </div>

        {message && (
          <div className={`message ${message.type}`}>
            <span>{message.text}</span>
          </div>
        )}

        <div className="settings-grid">
          {/* Enable/Disable Card */}
          <div className="settings-card">
            <div className="card-header">
              <h2 className="card-title">Calculator Status</h2>
              <p className="card-description">Enable or disable the calculator on the frontend</p>
            </div>
            <div className="card-body">
              <div className="toggle-switch">
                <label className="toggle-label">
                  <input
                    type="checkbox"
                    checked={settings.isEnabled}
                    onChange={(e) => handleChange('isEnabled', e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                  <span className="toggle-text">
                    {settings.isEnabled ? '✓ Calculator Enabled' : '✗ Calculator Disabled'}
                  </span>
                </label>
              </div>
              {!settings.isEnabled && (
                <p className="warning-text">When disabled, the calculator will not be visible to users.</p>
              )}
            </div>
          </div>

          {/* Default Values Card */}
          <div className="settings-card">
            <div className="card-header">
              <h2 className="card-title">Default Values</h2>
              <p className="card-description">These values will be used when users first open the calculator</p>
            </div>
            <div className="card-body">
              <div className="input-group">
                <label>Default Number of Employees</label>
                <div className="input-with-controls">
                  <input
                    type="number"
                    value={settings.defaultEmployees}
                    onChange={(e) => handleChange('defaultEmployees', parseInt(e.target.value))}
                    min="1"
                    max="50"
                  />
                  <div className="input-buttons">
                    <button onClick={() => handleChange('defaultEmployees', Math.max(1, settings.defaultEmployees - 1))}>-</button>
                    <button onClick={() => handleChange('defaultEmployees', Math.min(50, settings.defaultEmployees + 1))}>+</button>
                  </div>
                </div>
                <span className="input-hint">Number of employees (1-50)</span>
              </div>

              <div className="input-group">
                <label>Default Hourly Rate (€)</label>
                <div className="input-with-controls">
                  <input
                    type="number"
                    value={settings.defaultHourlyRate}
                    onChange={(e) => handleChange('defaultHourlyRate', parseInt(e.target.value))}
                    min="10"
                    max="100"
                    step="5"
                  />
                  <div className="input-buttons">
                    <button onClick={() => handleChange('defaultHourlyRate', Math.max(10, settings.defaultHourlyRate - 5))}>-</button>
                    <button onClick={() => handleChange('defaultHourlyRate', Math.min(100, settings.defaultHourlyRate + 5))}>+</button>
                  </div>
                </div>
                <span className="input-hint">Hourly rate in Euros (€10-€100)</span>
              </div>

              <div className="input-group">
                <label>Default Daily Calls</label>
                <div className="input-with-controls">
                  <input
                    type="number"
                    value={settings.defaultDailyCalls}
                    onChange={(e) => handleChange('defaultDailyCalls', parseInt(e.target.value))}
                    min="10"
                    max="500"
                    step="10"
                  />
                  <div className="input-buttons">
                    <button onClick={() => handleChange('defaultDailyCalls', Math.max(10, settings.defaultDailyCalls - 10))}>-</button>
                    <button onClick={() => handleChange('defaultDailyCalls', Math.min(500, settings.defaultDailyCalls + 10))}>+</button>
                  </div>
                </div>
                <span className="input-hint">Number of calls per day (10-500)</span>
              </div>

              <div className="input-group">
                <label>Default Avg Call Duration (minutes)</label>
                <div className="input-with-controls">
                  <input
                    type="number"
                    value={settings.defaultAvgCallDuration}
                    onChange={(e) => handleChange('defaultAvgCallDuration', parseFloat(e.target.value))}
                    min="1"
                    max="20"
                    step="0.5"
                  />
                  <div className="input-buttons">
                    <button onClick={() => handleChange('defaultAvgCallDuration', Math.max(1, settings.defaultAvgCallDuration - 0.5))}>-</button>
                    <button onClick={() => handleChange('defaultAvgCallDuration', Math.min(20, settings.defaultAvgCallDuration + 0.5))}>+</button>
                  </div>
                </div>
                <span className="input-hint">Average call duration in minutes (1-20 min)</span>
              </div>
            </div>
          </div>

          {/* Calculation Parameters Card */}
          <div className="settings-card">
            <div className="card-header">
              <h2 className="card-title">Calculation Parameters</h2>
              <p className="card-description">These values affect the savings calculation formula</p>
            </div>
            <div className="card-body">
              <div className="input-group">
                <label>Bot Call Percentage (%)</label>
                <div className="input-with-controls">
                  <input
                    type="number"
                    value={settings.botCallPercentage}
                    onChange={(e) => handleChange('botCallPercentage', parseInt(e.target.value))}
                    min="0"
                    max="100"
                  />
                  <div className="input-buttons">
                    <button onClick={() => handleChange('botCallPercentage', Math.max(0, settings.botCallPercentage - 5))}>-</button>
                    <button onClick={() => handleChange('botCallPercentage', Math.min(100, settings.botCallPercentage + 5))}>+</button>
                  </div>
                </div>
                <span className="input-hint">Percentage of calls that can be handled by AI (0-100%)</span>
              </div>

              <div className="input-group">
                <label>Bot Annual Cost (€)</label>
                <div className="input-with-controls">
                  <input
                    type="number"
                    value={settings.botAnnualCost}
                    onChange={(e) => handleChange('botAnnualCost', parseInt(e.target.value))}
                    min="0"
                    max="50000"
                    step="500"
                  />
                  <div className="input-buttons">
                    <button onClick={() => handleChange('botAnnualCost', Math.max(0, settings.botAnnualCost - 500))}>-</button>
                    <button onClick={() => handleChange('botAnnualCost', Math.min(50000, settings.botAnnualCost + 500))}>+</button>
                  </div>
                </div>
                <span className="input-hint">Annual cost of AI solution in Euros</span>
              </div>

              <div className="input-group">
                <label>Working Days Per Year</label>
                <div className="input-with-controls">
                  <input
                    type="number"
                    value={settings.workingDaysPerYear}
                    onChange={(e) => handleChange('workingDaysPerYear', parseInt(e.target.value))}
                    min="200"
                    max="260"
                  />
                  <div className="input-buttons">
                    <button onClick={() => handleChange('workingDaysPerYear', Math.max(200, settings.workingDaysPerYear - 5))}>-</button>
                    <button onClick={() => handleChange('workingDaysPerYear', Math.min(260, settings.workingDaysPerYear + 5))}>+</button>
                  </div>
                </div>
                <span className="input-hint">Number of working days per year (200-260)</span>
              </div>

              <div className="input-group">
                <label>Working Hours Per Day</label>
                <div className="input-with-controls">
                  <input
                    type="number"
                    value={settings.hourlyWorkHours}
                    onChange={(e) => handleChange('hourlyWorkHours', parseInt(e.target.value))}
                    min="4"
                    max="12"
                  />
                  <div className="input-buttons">
                    <button onClick={() => handleChange('hourlyWorkHours', Math.max(4, settings.hourlyWorkHours - 1))}>-</button>
                    <button onClick={() => handleChange('hourlyWorkHours', Math.min(12, settings.hourlyWorkHours + 1))}>+</button>
                  </div>
                </div>
                <span className="input-hint">Working hours per day (4-12 hours)</span>
              </div>
            </div>
          </div>

          {/* Preview Card */}
          <div className="settings-card preview-card">
            <div className="card-header">
              <h2 className="card-title">Live Preview</h2>
              <p className="card-description">See how your settings affect the calculator</p>
            </div>
            <div className="card-body">
              <div className="preview-stats">
                <div className="preview-item">
                  <span className="preview-label">Daily Call Time</span>
                  <span className="preview-value">{preview.minutesPerDay} min ({preview.hoursPerDay} hrs)</span>
                </div>
                <div className="preview-item">
                  <span className="preview-label">Annual Staff Cost</span>
                  <span className="preview-value">{formatCurrency(preview.annualEmployeeCost)}</span>
                </div>
                <div className="preview-item highlight">
                  <span className="preview-label">Annual Savings</span>
                  <span className="preview-value">{formatCurrency(preview.annualSavings)}</span>
                </div>
                <div className="preview-item">
                  <span className="preview-label">Savings Percentage</span>
                  <span className="preview-value">{preview.savingsPercentage}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn-secondary" onClick={handleReset} disabled={saving}>
            Reset to Default
          </button>
          <button className="btn-primary" onClick={handleSave} disabled={saving}>
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </div>

      <style jsx="true">{`
        .calculator-admin {
          padding: 32px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 32px;
        }

        .page-title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 8px 0;
        }

        .page-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 16px;
          color: #6B7280;
          margin: 0;
        }

        .message {
          padding: 12px 20px;
          border-radius: 12px;
          margin-bottom: 24px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          animation: slideIn 0.3s ease;
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

        .message.success {
          background: #D1FAE5;
          color: #065F46;
          border: 1px solid #A7F3D0;
        }

        .message.error {
          background: #FEE2E2;
          color: #991B1B;
          border: 1px solid #FECACA;
        }

        .message.info {
          background: #EFF6FF;
          color: #1E40AF;
          border: 1px solid #BFDBFE;
        }

        .settings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }

        .settings-card {
          background: #FFFFFF;
          border-radius: 20px;
          border: 1px solid #E5E5E7;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .settings-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .card-header {
          padding: 20px 24px;
          border-bottom: 1px solid #E5E5E7;
          background: #F9FAFB;
        }

        .card-title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #111827;
          margin: 0 0 4px 0;
        }

        .card-description {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 13px;
          color: #6B7280;
          margin: 0;
        }

        .card-body {
          padding: 24px;
        }

        .input-group {
          margin-bottom: 24px;
        }

        .input-group label {
          display: block;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          margin-bottom: 8px;
        }

        .input-with-controls {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .input-with-controls input {
          flex: 1;
          padding: 10px 12px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          border: 1px solid #E5E5E7;
          border-radius: 10px;
          transition: all 0.2s ease;
        }

        .input-with-controls input:focus {
          outline: none;
          border-color: #000000;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
        }

        .input-buttons {
          display: flex;
          gap: 4px;
        }

        .input-buttons button {
          width: 32px;
          height: 32px;
          background: #F3F4F6;
          border: 1px solid #E5E5E7;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          color: #374151;
          transition: all 0.2s ease;
        }

        .input-buttons button:hover {
          background: #E5E5E7;
        }

        .input-hint {
          display: block;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 11px;
          color: #9CA3AF;
          margin-top: 6px;
        }

        .warning-text {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 12px;
          color: #EF4444;
          margin-top: 12px;
          padding: 8px;
          background: #FEF2F2;
          border-radius: 8px;
        }

        /* Toggle Switch */
        .toggle-switch {
          display: flex;
          align-items: center;
        }

        .toggle-label {
          position: relative;
          display: inline-flex;
          align-items: center;
          cursor: pointer;
        }

        .toggle-label input {
          opacity: 0;
          width: 0;
          height: 0;
          position: absolute;
        }

        .toggle-slider {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 26px;
          background-color: #E5E5E7;
          border-radius: 26px;
          transition: 0.3s;
          margin-right: 12px;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 22px;
          width: 22px;
          left: 2px;
          bottom: 2px;
          background-color: white;
          border-radius: 50%;
          transition: 0.3s;
        }

        .toggle-label input:checked + .toggle-slider {
          background-color: #000000;
        }

        .toggle-label input:checked + .toggle-slider:before {
          transform: translateX(24px);
        }

        .toggle-text {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
        }

        /* Preview Card */
        .preview-card {
          background: #000000;
        }

        .preview-card .card-header {
          background: rgba(255, 255, 255, 0.05);
          border-bottom-color: rgba(255, 255, 255, 0.1);
        }

        .preview-card .card-title,
        .preview-card .card-description {
          color: #FFFFFF;
        }

        .preview-stats {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .preview-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          transition: all 0.2s ease;
        }

        .preview-item.highlight {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .preview-label {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 13px;
          color: #9CA3AF;
        }

        .preview-value {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #FFFFFF;
        }

        .preview-item.highlight .preview-value {
          color: #10B981;
          font-size: 16px;
        }

        /* Action Buttons */
        .action-buttons {
          display: flex;
          justify-content: flex-end;
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid #E5E5E7;
        }

        .btn-primary, .btn-secondary {
          padding: 12px 28px;
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

        .btn-primary:hover:not(:disabled) {
          background: #1F2937;
          transform: translateY(-1px);
        }

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-secondary {
          background: #FFFFFF;
          color: #374151;
          border: 1px solid #E5E5E7;
        }

        .btn-secondary:hover:not(:disabled) {
          background: #F9FAFB;
        }

        .btn-secondary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .calculator-admin {
            padding: 24px;
          }

          .settings-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .calculator-admin {
            padding: 20px;
          }

          .page-title {
            font-size: 28px;
          }

          .card-header {
            padding: 16px 20px;
          }

          .card-body {
            padding: 20px;
          }

          .action-buttons {
            flex-direction: column;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .calculator-admin {
            padding: 16px;
          }

          .page-title {
            font-size: 24px;
          }

          .input-with-controls {
            flex-direction: column;
          }

          .input-buttons {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </AdminLayout>
  );
};

export default AdminCalculator;