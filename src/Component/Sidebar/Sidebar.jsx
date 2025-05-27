import { FiGrid, FiClock, FiCalendar, FiClipboard, FiBarChart2, FiActivity, FiMessageSquare, FiHelpCircle, FiSettings } from 'react-icons/fi';
import { navLinks } from '../../data/navLinks';
import { tools } from '../../data/navLinks';
import {settings} from '../../data/navLinks';
import './Sidebar.css';

const iconComponents = {
  dashboard: FiGrid,
  history: FiClock,
  calendar: FiCalendar,
  appointments: FiClipboard,
  statistics: FiBarChart2,
  tests: FiActivity,
  chat: FiMessageSquare,
  support: FiHelpCircle,
  settings: FiSettings
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">General</h3>
      <nav className="sidebar-nav">
        <ul>
          {navLinks.map((link, index) => {
            const Icon = iconComponents[link.icon];
            return (
              <li key={index} className="nav-item">
                <Icon className="nav-icon" />
                <span className="nav-label">{link.label}</span>
              </li>
            );
          })}
        </ul>
        
        <h3 className='sidebar-title'>Tools</h3>
        <ul>
             {tools.map((link, index) => {
            const Icon = iconComponents[link.icon];
            return (
              <li key={index} className="nav-item">
                <Icon className="nav-icon" />
                <span className="nav-label">{link.label}</span>
              </li>
            );
          })}
        </ul>
        <div className='sidebar-bottom'>
          <ul>
            {settings.map((link, index) => {
            const Icon = iconComponents[link.icon];
            return (
              <li key={index} className="nav-item">
                <Icon className="nav-icon" />
                <span className="nav-label">{link.label}</span>
              </li>
            );
          })}
        </ul>
        </div>
        
      </nav>
    </aside>
  );
};

export default Sidebar;