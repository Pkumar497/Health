import { upcomingSchedule } from '../../../data/appointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3 className="section-title">The Upcoming Schedule</h3>
      {upcomingSchedule.map((daySchedule, index) => (
        <div key={index} className="day-schedule">
          <h4 className="day-title">On {daySchedule.day}</h4>
          <div className="appointments-container">
            {daySchedule.appointments.map(appointment => (
              <SimpleAppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;