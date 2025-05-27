import { calendarData, upcomingAppointments } from '../../../data/calendarData';
import './CalendarView.css';

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <h3 className="section-title">{calendarData.month}</h3>
      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="calendar-day-header">{day}</div>
        ))}
        {calendarData.days.map((day, index) => (
          <div 
            key={index} 
            className={`calendar-day ${day.appointments.length > 0 ? 'has-appointment' : ''}`}
          >
            <span className="day-number">{day.date}</span>
            {day.appointments.map((time, i) => (
              <div key={i} className="appointment-time">{time}</div>
            ))}
          </div>
        ))}
      </div>
      <div className="appointments-list">
        {upcomingAppointments.map(appointment => (
          <div key={appointment.id} className="appointment-card">
<img
  src={appointment.img}
  alt={appointment.title}
  style={{ width: 40, height: 40, borderRadius: '50%', marginLeft: 80 }}
/>            <h4>{appointment.title}</h4>
            <p>{appointment.date} at {appointment.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;