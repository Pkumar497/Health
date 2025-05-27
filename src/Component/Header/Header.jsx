import { FiSearch, FiBell, FiPlus } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Healthcare.</h1>
      </div>
      <div className="header-center">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search..." disabled />
        </div>
      </div>
      <div className="header-right">
        <FiBell className="notification-icon" />
        <div className="user-profile">
          <img 
            src="https://randomuser.me/api/portraits/women/44.jpg" 
            alt="User" 
            className="user-avatar" 
          />
          
        </div>
        <button className="add-button">
          <FiPlus />
        </button>
      </div>
    </header>
  );
};

export default Header;