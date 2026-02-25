import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SavingsCalculator = () => {
  const { t } = useTranslation();
  
  const [employees, setEmployees] = useState(3);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [dailyCalls, setDailyCalls] = useState(80);
  const [avgCallDuration, setAvgCallDuration] = useState(4);
  
  const calculateSavings = () => {
    const workingDaysPerYear = 240;
    const minutesPerDay = dailyCalls * avgCallDuration;
    const hoursPerDay = minutesPerDay / 60;
    const annualEmployeeCost = employees * hourlyRate * 8 * workingDaysPerYear;
    const botCallPercentage = 0.8;
    const botAnnualCost = 6000;
    const annualSavings = (annualEmployeeCost * botCallPercentage) - botAnnualCost;
    
    return {
      minutesPerDay: Math.round(minutesPerDay),
      hoursPerDay: hoursPerDay.toFixed(1),
      annualEmployeeCost: Math.round(annualEmployeeCost),
      annualSavings: Math.round(annualSavings),
      savingsPercentage: Math.round((annualSavings / annualEmployeeCost) * 100)
    };
  };
  
  const savings = calculateSavings();
  
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };
  
  return (
    <>
      <section className="calculator-section">
        <div className="calculator-container">
          <div className="calculator-header">
            <h2 className="calculator-title">
              <span className="title-line">Calculate Your</span>
              <span className="title-line highlight">Potential Savings</span>
            </h2>
            <p className="calculator-subtitle">
              Discover how much your practice can save with our AI phone assistant
            </p>
          </div>
          
          <div className="calculator-grid">
            <div className="calculator-inputs">
              <div className="input-group">
                <div className="input-header">
                  <label htmlFor="employees">Employees handling calls</label>
                  <span className="input-value">{employees}</span>
                </div>
                <input
                  type="range"
                  id="employees"
                  min="1"
                  max="20"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="range-input"
                />
                <div className="input-range-labels">
                  <span>1</span>
                  <span>5</span>
                  <span>10</span>
                  <span>15</span>
                  <span>20+</span>
                </div>
              </div>
              
              <div className="input-group">
                <div className="input-header">
                  <label htmlFor="hourlyRate">Hourly rate (€)</label>
                  <span className="input-value">{hourlyRate}€</span>
                </div>
                <input
                  type="range"
                  id="hourlyRate"
                  min="15"
                  max="60"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                  className="range-input"
                />
                <div className="input-range-labels">
                  <span>15€</span>
                  <span>25€</span>
                  <span>35€</span>
                  <span>45€</span>
                  <span>60€</span>
                </div>
              </div>
              
              <div className="input-group">
                <div className="input-header">
                  <label htmlFor="dailyCalls">Calls per day</label>
                  <span className="input-value">{dailyCalls}</span>
                </div>
                <input
                  type="range"
                  id="dailyCalls"
                  min="20"
                  max="200"
                  step="10"
                  value={dailyCalls}
                  onChange={(e) => setDailyCalls(parseInt(e.target.value))}
                  className="range-input"
                />
                <div className="input-range-labels">
                  <span>20</span>
                  <span>50</span>
                  <span>100</span>
                  <span>150</span>
                  <span>200+</span>
                </div>
              </div>
              
              <div className="input-group">
                <div className="input-header">
                  <label htmlFor="avgCallDuration">Average duration (min.)</label>
                  <span className="input-value">{avgCallDuration} min</span>
                </div>
                <input
                  type="range"
                  id="avgCallDuration"
                  min="1"
                  max="10"
                  step="0.5"
                  value={avgCallDuration}
                  onChange={(e) => setAvgCallDuration(parseFloat(e.target.value))}
                  className="range-input"
                />
                <div className="input-range-labels">
                  <span>1</span>
                  <span>3</span>
                  <span>5</span>
                  <span>7</span>
                  <span>10</span>
                </div>
              </div>
            </div>
            
            <div className="calculator-results">
              <div className="results-card">
                <h3 className="results-title">Your Savings Potential</h3>
                
                <div className="metrics-grid">
                  <div className="metric-item">
                    <div className="metric-label">Call time per day</div>
                    <div className="metric-value">
                      <span className="metric-number">{savings.minutesPerDay}</span>
                      <span className="metric-unit">min</span>
                    </div>
                    <div className="metric-detail">({savings.hoursPerDay} hours)</div>
                  </div>
                  
                  <div className="metric-item">
                    <div className="metric-label">Annual staff cost</div>
                    <div className="metric-value">
                      <span className="metric-number">{formatCurrency(savings.annualEmployeeCost)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="savings-result">
                  <div className="savings-label">Annual savings with AI</div>
                  <div className="savings-amount">{formatCurrency(savings.annualSavings)}</div>
                  <div className="savings-percentage">
                    <span className="percentage-badge">-{savings.savingsPercentage}%</span>
                    <span className="savings-note">vs. manual handling</span>
                  </div>
                </div>
                
                <button className="calculator-cta">
                  Request consultation
                  <svg className="cta-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 15L15 5M15 5H8M15 5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <p className="calculator-disclaimer">
                  *Based on 240 working days per year and 80% automation rate. Individual savings may vary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .calculator-section {
          width: 100%;
          padding: 35px 100px;
          background: #F9F9F9;
          position: relative;
        }
        
        .calculator-container {
          max-width: 1300px;
          margin: 0 auto;
        }
        
        .calculator-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .calculator-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.1;
          color: #000000;
          margin: 0 0 20px 0;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        
        .title-line {
          display: block;
        }
        
        .title-line.highlight {
          position: relative;
          display: inline-block;
          margin: 0 auto;
        }
        
        .calculator-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          line-height: 1.6;
          color: #6B7280;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .calculator-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: start;
        }
        
        .calculator-inputs {
          background: #FFFFFF;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }
        
        .input-group {
          margin-bottom: 35px;
        }
        
        .input-group:last-child {
          margin-bottom: 0;
        }
        
        .input-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }
        
        .input-header label {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #374151;
        }
        
        .input-value {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #000000;
          background: #F3F4F6;
          padding: 4px 12px;
          border-radius: 20px;
        }
        
        .range-input {
          width: 100%;
          height: 5px;
          -webkit-appearance: none;
          background: linear-gradient(90deg, #000000 0%, #000000 var(--value-percent, 50%), #E5E7EB var(--value-percent, 50%), #E5E7EB 100%);
          border-radius: 5px;
          outline: none;
        }
        
        .range-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          background: #FFFFFF;
          border: 2px solid #000000;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .range-input::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          background: #000000;
        }
        
        .input-range-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 12px;
          color: #9CA3AF;
        }
        
        .calculator-results {
          position: sticky;
          top: 120px;
        }
        
        .results-card {
          background: #000000;
          border-radius: 20px;
          padding: 40px;
          color: #FFFFFF;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .results-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 30px 0;
        }
        
        .metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .metric-item {
          padding: 15px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
        }
        
        .metric-label {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 13px;
          color: #9CA3AF;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .metric-value {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }
        
        .metric-number {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #FFFFFF;
        }
        
        .metric-unit {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          color: #9CA3AF;
        }
        
        .metric-detail {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 12px;
          color: #6B7280;
          margin-top: 4px;
        }
        
        .savings-result {
          text-align: center;
          padding: 25px 0;
          margin: 20px 0;
        }
        
        .savings-label {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          color: #9CA3AF;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }
        
        .savings-amount {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 48px;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 10px;
        }
        
        .savings-percentage {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        
        .percentage-badge {
          background: #10B981;
          color: #FFFFFF;
          padding: 4px 12px;
          border-radius: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          font-weight: 600;
        }
        
        .savings-note {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 13px;
          color: #9CA3AF;
        }
        
        .calculator-cta {
          width: 100%;
          padding: 16px 24px;
          background: #FFFFFF;
          border: none;
          border-radius: 12px;
          color: #000000;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
          margin-top: 30px;
        }
        
        .calculator-cta:hover {
          background: #F3F4F6;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
        }
        
        .cta-arrow {
          transition: transform 0.3s ease;
        }
        
        .calculator-cta:hover .cta-arrow {
          transform: translateX(5px);
        }
        
        .calculator-disclaimer {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 11px;
          color: #6B7280;
          text-align: center;
          margin: 20px 0 0 0;
        }
        
        @media (max-width: 1200px) {
          .calculator-section {
            padding: 60px 60px;
          }
          .calculator-title {
            font-size: 44px;
          }
        }
        
        @media (max-width: 1024px) {
          .calculator-section {
            padding: 50px 40px;
          }
          .calculator-grid {
            gap: 30px;
          }
          .calculator-inputs,
          .results-card {
            padding: 30px;
          }
        }
        
        @media (max-width: 992px) {
          .calculator-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .calculator-results {
            position: static;
          }
          .savings-amount {
            font-size: 42px;
          }
        }
        
        @media (max-width: 768px) {
          .calculator-section {
            padding: 50px 30px;
          }
          .calculator-title {
            font-size: 36px;
          }
          .calculator-subtitle {
            font-size: 16px;
          }
          .metrics-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 576px) {
          .calculator-section {
            padding: 40px 20px;
          }
          .calculator-title {
            font-size: 32px;
          }
          .calculator-inputs,
          .results-card {
            padding: 25px;
          }
          .savings-amount {
            font-size: 36px;
          }
          .input-header label {
            font-size: 14px;
          }
          .input-value {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default SavingsCalculator;