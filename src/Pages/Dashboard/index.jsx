import { Outlet } from 'react-router-dom';
import LeftSidebar from '../../Components/LeftSidebar';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="layout">
            <LeftSidebar />
            <main className="content">
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;