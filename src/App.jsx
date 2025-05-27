import './App.css';
import Header from './Component/Header/Header'
import Sidebar from './Component/Sidebar/Sidebar'
import DashboardMainContent from './Component/DashboardMainContent/DashboardMainContent'


function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-main">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;