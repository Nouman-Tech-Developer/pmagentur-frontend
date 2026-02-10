import React, { useState } from 'react';
import { 
  FiChevronRight, 
  FiMapPin, 
  FiClock, 
  FiBriefcase, 
  FiAward, 
  FiArrowRight,
  FiCode,
  FiGlobe,
  FiTrendingUp,
  FiUsers,
  FiMonitor,
  FiTarget,
  FiLayers,
  FiTool
} from 'react-icons/fi';

const CareerBody = () => {
  const [expandedJob, setExpandedJob] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  // Mock job data
  const jobCategories = ['all', 'tech', 'marketing', 'operations', 'design'];
  
  const jobs = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Tech",
      location: "Berlin, Germany",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our core AI team to develop cutting-edge machine learning solutions.",
      category: "tech",
      responsibilities: [
        "Design and implement machine learning models",
        "Optimize AI algorithms for performance",
        "Collaborate with data scientists and engineers",
        "Stay updated with latest AI research"
      ],
      requirements: [
        "Master's degree in Computer Science or related field",
        "5+ years experience in AI/ML development",
        "Expertise in Python, TensorFlow/PyTorch",
        "Strong mathematical background"
      ]
    },
    {
      id: 2,
      title: "Frontend Developer",
      department: "Tech",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Build beautiful, responsive user interfaces with React and Next.js.",
      category: "tech",
      responsibilities: [
        "Develop responsive web applications",
        "Implement UI/UX designs",
        "Optimize frontend performance",
        "Collaborate with backend teams"
      ],
      requirements: [
        "3+ years experience with React",
        "Strong JavaScript/TypeScript skills",
        "Experience with Next.js",
        "Knowledge of modern CSS frameworks"
      ]
    },
    {
      id: 3,
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Munich, Germany",
      type: "Full-time",
      experience: "4+ years",
      description: "Drive product adoption and create compelling marketing campaigns.",
      category: "marketing",
      responsibilities: [
        "Develop marketing strategies for AI products",
        "Create compelling product messaging",
        "Analyze market trends and competition",
        "Collaborate with sales and product teams"
      ],
      requirements: [
        "4+ years in product marketing",
        "Experience in tech/SaaS industry",
        "Strong analytical skills",
        "Excellent communication abilities"
      ]
    },
    {
      id: 4,
      title: "UX/UI Designer",
      department: "Design",
      location: "Hamburg, Germany",
      type: "Full-time",
      experience: "3+ years",
      description: "Create intuitive and beautiful user experiences for our AI products.",
      category: "design",
      responsibilities: [
        "Design user interfaces for AI applications",
        "Create wireframes and prototypes",
        "Conduct user research and testing",
        "Collaborate with development teams"
      ],
      requirements: [
        "3+ years in UX/UI design",
        "Portfolio showcasing design work",
        "Proficiency in Figma/Sketch",
        "Understanding of AI/ML concepts"
      ]
    },
    {
      id: 5,
      title: "Operations Specialist",
      department: "Operations",
      location: "Berlin, Germany",
      type: "Full-time",
      experience: "2+ years",
      description: "Optimize internal processes and ensure smooth day-to-day operations.",
      category: "operations",
      responsibilities: [
        "Streamline operational processes",
        "Manage internal tools and systems",
        "Coordinate between departments",
        "Analyze operational efficiency"
      ],
      requirements: [
        "2+ years in operations role",
        "Strong organizational skills",
        "Experience with process optimization",
        "Tech-savvy with various software tools"
      ]
    },
    {
      id: 6,
      title: "Backend Engineer",
      department: "Tech",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Build scalable backend systems and APIs for our AI platform.",
      category: "tech",
      responsibilities: [
        "Develop and maintain backend services",
        "Design RESTful APIs",
        "Implement data storage solutions",
        "Ensure system security and scalability"
      ],
      requirements: [
        "4+ years backend development",
        "Experience with Node.js/Python",
        "Knowledge of databases (SQL/NoSQL)",
        "Experience with cloud platforms (AWS/GCP)"
      ]
    }
  ];

  const filteredJobs = activeTab === 'all' 
    ? jobs 
    : jobs.filter(job => job.category === activeTab);

  const toggleJobExpansion = (jobId) => {
    if (expandedJob === jobId) {
      setExpandedJob(null);
    } else {
      setExpandedJob(jobId);
    }
  };

  return (
    <>
      <section className="jobs-section">
        <div className="jobs-container">
          <div className="jobs-header">
            <h2 className="jobs-title">Offene Stellen</h2>
            <p className="jobs-subtitle">
              Entdecke spannende Karrieremöglichkeiten in einem innovativen KI-Unternehmen
            </p>
          </div>

          {/* Job Categories Tabs */}
          <div className="job-categories">
            {jobCategories.map((category) => (
              <button
                key={category}
                className={`category-tab ${activeTab === category ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(category);
                  setExpandedJob(null); // Close expanded job when switching tabs
                }}
              >
                {category === 'all' ? 'Alle Stellen' : 
                 category === 'tech' ? 'Technologie' :
                 category === 'marketing' ? 'Marketing' :
                 category === 'operations' ? 'Operations' : 'Design'}
              </button>
            ))}
          </div>

          {/* Jobs List - Full Width Accordion */}
          <div className="jobs-accordion">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="job-accordion-item">
                  {/* Job Header - Always Visible - ARROW MOVED TO START */}
                  <div 
                    className="job-accordion-header"
                    onClick={() => toggleJobExpansion(job.id)}
                  >
                    {/* ARROW ON LEFT SIDE */}
                    <div className="job-arrow">
                      <FiChevronRight className={`arrow-icon ${expandedJob === job.id ? 'expanded' : ''}`} />
                    </div>
                    
                    <div className="job-header-content">
                      <div className="job-title-wrapper">
                        <h3 className="job-title">{job.title}</h3>
                        <span className="job-department">{job.department}</span>
                      </div>
                      
                      <div className="job-meta">
                        <div className="job-meta-item">
                          <FiMapPin className="meta-icon" />
                          <span>{job.location}</span>
                        </div>
                        <div className="job-meta-item">
                          <FiClock className="meta-icon" />
                          <span>{job.type}</span>
                        </div>
                        <div className="job-meta-item">
                          <FiBriefcase className="meta-icon" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Job Details - Expandable */}
                  <div className={`job-accordion-content ${expandedJob === job.id ? 'expanded' : ''}`}>
                    <div className="job-details-grid">
                      {/* Left Column - Overview & Requirements */}
                      <div className="job-details-left">
                        <div className="job-overview">
                          <h4>Überblick</h4>
                          <p className="job-full-description">{job.description}</p>
                        </div>
                        
                        <div className="job-responsibilities">
                          <h4>Deine Aufgaben</h4>
                          <ul className="responsibilities-list">
                            {job.responsibilities.map((resp, index) => (
                              <li key={index}>
                                <FiArrowRight className="responsibility-arrow" />
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="job-requirements">
                          <h4>Anforderungen</h4>
                          <ul className="requirements-list">
                            {job.requirements.map((req, index) => (
                              <li key={index}>
                                <FiArrowRight className="requirement-arrow" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Right Column - Benefits & Apply */}
                      <div className="job-details-right">
                        <div className="job-benefits">
                          <h4>Das bieten wir</h4>
                          <ul className="benefits-list">
                            <li>
                              <FiArrowRight className="benefit-arrow" />
                              Attraktives Gehaltspaket
                            </li>
                            <li>
                              <FiArrowRight className="benefit-arrow" />
                              Flexible Arbeitszeiten
                            </li>
                            <li>
                              <FiArrowRight className="benefit-arrow" />
                              Home Office Möglichkeiten
                            </li>
                            <li>
                              <FiArrowRight className="benefit-arrow" />
                              Weiterbildungsbudget
                            </li>
                            <li>
                              <FiArrowRight className="benefit-arrow" />
                              Moderne Arbeitsausstattung
                            </li>
                            <li>
                              <FiArrowRight className="benefit-arrow" />
                              Team Events & Retreats
                            </li>
                          </ul>
                        </div>
                        
                        <div className="job-apply-section">
                          <div className="job-skills">
                            <span className="skill-tag">KI</span>
                            <span className="skill-tag">Technologie</span>
                            <span className="skill-tag">Innovation</span>
                            <span className="skill-tag">Teamarbeit</span>
                          </div>
                          
                          <button className="apply-button">
                            Jetzt bewerben
                          </button>
                          
                          <p className="apply-note">
                            Bewerbungen werden laufend geprüft.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-jobs">
                <FiAward className="no-jobs-icon" />
                <p>Keine offenen Stellen in dieser Kategorie.</p>
                <p className="no-jobs-sub">Schau später wieder vorbei!</p>
              </div>
            )}
          </div>

          {/* Benefits Section - ICONS INSTEAD OF EMOJIS */}
          <div className="benefits-section">
            <h3 className="benefits-title">Warum bei TOLERO arbeiten?</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FiCode size={40} />
                </div>
                <h4>Moderne Technologie</h4>
                <p>Arbeite mit den neuesten KI-Technologien und Tools</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FiGlobe size={40} />
                </div>
                <h4>Flexible Arbeitsmodelle</h4>
                <p>Remote, Hybrid oder vor Ort - du entscheidest</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FiTrendingUp size={40} />
                </div>
                <h4>Karrierewachstum</h4>
                <p>Regelmäßige Schulungen und Aufstiegsmöglichkeiten</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FiUsers size={40} />
                </div>
                <h4>Teamkultur</h4>
                <p>Flache Hierarchien und kollegiales Miteinander</p>
              </div>
            </div>
            
            {/* Additional Benefit Cards */}
            <div className="benefits-grid secondary">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FiMonitor size={40} />
                </div>
                <h4>Moderne Ausstattung</h4>
                <p>Hochwertige Hardware und Software für optimale Arbeit</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FiTarget size={40} />
                </div>
                <h4>Klare Ziele</h4>
                <p>Transparente Zielvorgaben und regelmäßiges Feedback</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FiLayers size={40} />
                </div>
                <h4>Vielfältige Projekte</h4>
                <p>Spannende Projekte in verschiedenen Branchen</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FiTool size={40} />
                </div>
                <h4>Weiterbildung</h4>
                <p>Budget und Zeit für persönliche Entwicklung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Font Family - Same as HeroSection */
        .jobs-section {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        
        /* Jobs Detailed Section */
        .jobs-section {
          width: 100%;
          padding: 80px 0;
          background: #F9FAFB;
        }

        .jobs-container {
          max-width: 1400px;
          margin: 0 auto;
          /* FOLLOWING 35 100 PADDING PATTERN */
          padding: 0 100px; /* 100px on desktop */
        }

        .jobs-header {
          text-align: center;
          margin-bottom: 60px;
        }

        /* EXACT SAME COLORS AS HERO SECTION */
        .jobs-title {
          font-size: 42px;
          font-weight: 700;
          color: #111827; /* Same as hero main-headline */
          margin-bottom: 16px;
          font-family: inherit;
        }

        .jobs-subtitle {
          font-size: 18px;
          color: #6B7280; /* Same as hero company-tag */
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          font-family: inherit;
        }

        /* Job Categories */
        .job-categories {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .category-tab {
          padding: 12px 24px;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #6B7280; /* Same as hero company-tag */
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .category-tab:hover {
          border-color: #0066FF; /* Same blue accent */
          color: #0066FF;
        }

        .category-tab.active {
          background: #0066FF; /* Same blue accent */
          border-color: #0066FF;
          color: #FFFFFF;
        }

        /* Jobs Accordion */
        .jobs-accordion {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 80px;
        }

        .job-accordion-item {
          background: #FFFFFF;
          border-radius: 12px;
          border: 1px solid #E5E7EB;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .job-accordion-item:hover {
          border-color: #0066FF; /* Same blue accent */
        }

        /* Job Header - ARROW MOVED TO START (LEFT SIDE) */
        .job-accordion-header {
          display: flex;
          align-items: center;
          padding: 32px;
          cursor: pointer;
          transition: background 0.3s ease;
          gap: 20px; /* Space between arrow and content */
        }

        .job-accordion-header:hover {
          background: #F9FAFB;
        }

        /* ARROW ON LEFT SIDE - MOVED TO START */
        .job-arrow {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .arrow-icon {
          font-size: 24px;
          color: #9CA3AF;
          transition: all 0.3s ease;
          transform: rotate(0deg);
        }

        .arrow-icon.expanded {
          transform: rotate(90deg);
          color: #0066FF; /* Same blue accent */
        }

        .job-header-content {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }

        .job-title-wrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .job-title {
          font-size: 24px;
          font-weight: 700;
          color: #111827; /* Same as hero main-headline */
          margin: 0;
          font-family: inherit;
        }

        .job-department {
          display: inline-block;
          padding: 6px 12px;
          background: #EFF6FF;
          color: #0066FF; /* Same blue accent */
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          align-self: flex-start;
          font-family: inherit;
        }

        .job-meta {
          display: flex;
          gap: 32px;
        }

        .job-meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #6B7280; /* Same as hero company-tag */
          font-family: inherit;
        }

        .meta-icon {
          color: #9CA3AF;
        }

        /* Job Content */
        .job-accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease;
          background: #F9FAFB;
        }

        .job-accordion-content.expanded {
          max-height: 1000px;
        }

        .job-details-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 48px;
          padding: 48px 32px;
          border-top: 1px solid #E5E7EB;
        }

        .job-details-left, .job-details-right {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        /* EXACT SAME COLORS FOR HEADINGS */
        .job-details-left h4,
        .job-details-right h4 {
          font-size: 18px;
          font-weight: 700;
          color: #111827; /* Same as hero main-headline */
          margin-bottom: 16px;
          font-family: inherit;
        }

        .job-full-description {
          font-size: 16px;
          color: #4B5563; /* Slightly lighter than #374151 */
          line-height: 1.6;
          margin: 0;
          font-family: inherit;
        }

        .responsibilities-list,
        .requirements-list,
        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* ARROW ICONS ON LEFT SIDE - OPPOSITE TO DEFAULT */
        .responsibilities-list li,
        .requirements-list li,
        .benefits-list li {
          font-size: 16px;
          color: #4B5563;
          line-height: 1.6;
          position: relative;
          padding-left: 32px; /* Space for arrow */
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-family: inherit;
        }

        /* Arrow icons for bullet points */
        .responsibility-arrow,
        .requirement-arrow,
        .benefit-arrow {
          color: #0066FF; /* Same blue accent */
          font-size: 16px;
          position: absolute;
          left: 0;
          top: 3px;
          flex-shrink: 0;
        }

        /* Different arrow colors for different sections */
        .responsibility-arrow {
          color: #0066FF; /* Blue for responsibilities */
        }

        .requirement-arrow {
          color: #10B981; /* Green for requirements */
        }

        .benefit-arrow {
          color: #F59E0B; /* Orange for benefits */
        }

        /* Remove default bullet styles */
        .responsibilities-list li:before,
        .requirements-list li:before,
        .benefits-list li:before {
          content: none;
        }

        /* Skills & Apply Section */
        .job-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 24px;
        }

        .skill-tag {
          padding: 6px 12px;
          background: #F3F4F6;
          color: #4B5563;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          font-family: inherit;
        }

        .apply-button {
          width: 100%;
          padding: 16px 32px;
          background: #0066FF; /* Same blue accent */
          color: #FFFFFF;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
          margin-bottom: 16px;
          font-family: inherit;
        }

        .apply-button:hover {
          background: #0052CC;
        }

        .apply-note {
          font-size: 14px;
          color: #6B7280; /* Same as hero company-tag */
          text-align: center;
          margin: 0;
          font-family: inherit;
        }

        /* No Jobs State */
        .no-jobs {
          text-align: center;
          padding: 80px 20px;
          background: #FFFFFF;
          border-radius: 12px;
          border: 1px dashed #E5E7EB;
        }

        .no-jobs-icon {
          font-size: 48px;
          color: #9CA3AF;
          margin-bottom: 20px;
        }

        .no-jobs p {
          font-size: 18px;
          color: #6B7280; /* Same as hero company-tag */
          margin-bottom: 8px;
          font-family: inherit;
        }

        .no-jobs-sub {
          font-size: 14px;
          color: #9CA3AF;
          font-family: inherit;
        }

        /* Benefits Section - UPDATED WITH ICONS */
        .benefits-section {
          padding-top: 80px;
          border-top: 1px solid #E5E7EB;
        }

        .benefits-title {
          text-align: center;
          font-size: 36px;
          font-weight: 700;
          color: #111827; /* Same as hero main-headline */
          margin-bottom: 50px;
          font-family: inherit;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 30px;
        }

        .benefits-grid.secondary {
          margin-bottom: 0;
        }

        .benefit-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 32px;
          text-align: center;
          border: 1px solid #E5E7EB;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .benefit-card:hover {
          transform: translateY(-8px);
          border-color: #0066FF;
          box-shadow: 0 10px 25px rgba(0, 102, 255, 0.1);
        }

        .benefit-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #EFF6FF; /* Light blue background */
          border-radius: 50%;
          margin-bottom: 24px;
          color: #0066FF; /* Blue color for icons */
          transition: all 0.3s ease;
        }

        .benefit-card:hover .benefit-icon {
          background: #0066FF;
          color: #FFFFFF;
          transform: scale(1.1);
        }

        .benefit-card h4 {
          font-size: 20px;
          font-weight: 700;
          color: #111827; /* Same as hero main-headline */
          margin-bottom: 12px;
          font-family: inherit;
        }

        .benefit-card p {
          font-size: 16px;
          color: #6B7280; /* Same as hero company-tag */
          line-height: 1.6;
          font-family: inherit;
          margin: 0;
        }

        /* ===== 35 100 PADDING RESPONSIVE PATTERN ===== */
        
        /* Large Desktop: 1700px+ */
        @media (max-width: 1700px) {
          .jobs-container {
            max-width: 1600px;
            padding: 0 90px;
          }
        }

        /* Large Desktop: 1600px+ */
        @media (max-width: 1600px) {
          .jobs-container {
            max-width: 1500px;
            padding: 0 80px;
          }
        }

        /* Large Desktop: 1440px+ */
        @media (max-width: 1440px) {
          .jobs-container {
            max-width: 1300px;
            padding: 0 70px;
          }
        }

        /* Desktop: 1366px */
        @media (max-width: 1366px) {
          .jobs-container {
            max-width: 1200px;
            padding: 0 60px;
          }
        }

        /* Desktop: 1200px */
        @media (max-width: 1200px) {
          .jobs-container {
            padding: 0 50px;
          }
          
          .job-details-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        /* Tablet Landscape: 1024px */
        @media (max-width: 1024px) {
          .jobs-container {
            padding: 0 40px;
          }
          
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .benefits-grid.secondary {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Tablet Portrait: 992px */
        @media (max-width: 992px) {
          .jobs-container {
            padding: 0 35px; /* 35px on tablet */
          }
          
          .job-header-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          
          .job-meta {
            width: 100%;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 16px;
          }
        }

        /* Mobile Landscape: 768px */
        @media (max-width: 768px) {
          .jobs-title {
            font-size: 36px;
          }
          
          .job-categories {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 10px;
          }
          
          .category-tab {
            white-space: nowrap;
          }
          
          .job-accordion-header {
            padding: 24px;
            gap: 15px;
          }
          
          .job-title {
            font-size: 20px;
          }
          
          .job-details-grid {
            padding: 32px 24px;
          }
          
          /* Adjust arrow position for mobile */
          .responsibilities-list li,
          .requirements-list li,
          .benefits-list li {
            padding-left: 28px;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr;
          }
          
          .benefits-grid.secondary {
            grid-template-columns: 1fr;
          }
        }

        /* Mobile Portrait: 576px */
        @media (max-width: 576px) {
          .jobs-container {
            padding: 0 25px; /* Reduced from 35px */
          }
          
          .jobs-title {
            font-size: 32px;
          }
          
          .job-accordion-header {
            flex-direction: row; /* Keep arrow on left */
            align-items: flex-start;
            gap: 15px;
          }
          
          .job-header-content {
            flex-direction: column;
            gap: 15px;
          }
          
          .job-meta {
            flex-direction: column;
            gap: 12px;
          }
          
          .arrow-icon {
            margin-top: 5px; /* Align with title */
          }
          
          .benefit-icon {
            width: 70px;
            height: 70px;
          }
          
          .benefit-icon svg {
            width: 30px;
            height: 30px;
          }
        }

        /* Small Mobile: 480px */
        @media (max-width: 480px) {
          .jobs-container {
            padding: 0 20px;
          }
          
          .job-accordion-header {
            flex-wrap: wrap;
          }
          
          .job-arrow {
            order: 1;
          }
          
          .job-header-content {
            order: 2;
            width: 100%;
          }
        }

        /* Extra small devices: 360px */
        @media (max-width: 360px) {
          .jobs-container {
            padding: 0 15px;
          }
          
          .jobs-title {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default CareerBody;