import AnatomySection from './AnatomySection/AnatomySection'
import CalendarView from './CalendarView/CalendarView'
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule'
import ActivityFeed from './ActivityFeed/ActivityFeed'
import './DashboardMainContent.css'

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      
      <div className="dashboard-middle">
        <AnatomySection />
     
      </div>
      <div className="dashboard-bottom">
        <div className="dashboard-left">
         
          <ActivityFeed />
          
        </div>
        <div className="dashboard-right">
           <CalendarView />
           <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;