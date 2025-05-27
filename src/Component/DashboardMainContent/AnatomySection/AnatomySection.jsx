import { anatomyData } from '../../../data/healthData';
import './AnatomySection.css';
import {healthStatusCards}  from '../../../data/healthData.js';


const AnatomySection = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy': return 'var(--success-color)';
      case 'critical': return 'var(--danger-color)';
      case 'warning': return 'var(--warning-color)';
      default: return 'var(--dark-gray)';
    }
  };

  return (
    <div className="anatomy-section">
      <select name="section-left" id="section-left">
        <option value="dropdown">THis week</option>
        <option value="dropdown">prev week</option>
        <option value="dropdown">prev month</option>
      </select>
      <div className="anatomy-container">
        <img 
          src="human.webp" 
          alt="Human anatomy" 
          className="anatomy-image"
        />
       <div className="card-container">
          {healthStatusCards && healthStatusCards.length > 0 ? (
            healthStatusCards.map((card, idx) => (
              <div className="health-card" key={idx}>
                <div className='health-img'>
                  <img src={card.img} alt={card.part} style={{ width: 32, height: 32 }} />
                </div>
                <div className="health-part">{card.part}</div>
                <div className="health-date">{card.date}</div>
                <div className="health-status">{card.status}</div>
                <div className="progress-bar-background">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${card.progress || 0}%` }}
                  ></div>
                </div>
              </div>
            ))
          ) : (
            <div>No health status data available.</div>
          )}
        </div>
        {/* {anatomyData.map(item => (
          <div 
            key={item.id}
            className="anatomy-indicator"
            style={{
              top: item.position.top,
              left: item.position.left,
              backgroundColor: getStatusColor(item.status)
            }}
          >
            <div className="indicator-tooltip">
              {item.part} - {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
            </div>
            </div> */}
      </div>
    </div>
  );
};

export default AnatomySection;