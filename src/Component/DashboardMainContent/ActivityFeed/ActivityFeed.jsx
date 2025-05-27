import './ActivityFeed.css';

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h3 className="section-title">Activity</h3>
      <p className="activity-summary">3 appointments on this week</p>
      <div className="activity-chart">
        <div className="chart-bar" style={{ height: '40%' }}></div>
        <div className="chart-bar" style={{ height: '60%' }}></div>
        <div className="chart-bar" style={{ height: '30%' }}></div>
        <div className="chart-bar" style={{ height: '80%' }}></div>
        <div className="chart-bar" style={{ height: '50%' }}></div>
        <div className="chart-bar" style={{ height: '70%' }}></div>
        <div className="chart-bar" style={{ height: '20%' }}></div>
      </div>
    </div>
  );
};

export default ActivityFeed;