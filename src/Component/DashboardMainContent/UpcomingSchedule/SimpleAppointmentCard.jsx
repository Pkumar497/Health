import './UpcomingSchedule.css';
import { upcomingSchedule } from '../../../data/appointments';

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className="simple-appointment-card">
      <div className="card-content">
        <h5>{appointment.title}</h5>
        <p>{appointment.time}</p>
      </div>
      <div className="card-icon">
        <div className="icon-img" >
         <img
      src={appointment.img}
      alt={appointment.title}
      style={{ width: 32, height: 32, objectFit: 'cover', borderRadius: '40%',marginLeft: 10 }}
    />
        </div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;