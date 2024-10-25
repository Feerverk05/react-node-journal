import React from "react";
import Sidebar from '../Dashboard/Components/Sidebar Section/Sidebar'
import Body from '../Dashboard/Components/Body Section/Body'

const dashboardStyles = {
    display: 'flex',
    height: '100vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
};

const containerStyles = {
    height: '90vh',
    width: '90%',
    borderRadius: '10px',
    overflow: 'hidden',
    background: '#fff',
    boxShadow: '0 5px 10px rgb(194, 194, 194)',
    display: 'flex',
    position: 'fixed'
};

const Dashboard = () => {
    return (
        <div className="dashboard" style={dashboardStyles}>
            <div className="dashboardContainer" style={containerStyles}>
                <Sidebar/>
                <Body/>   
            </div>
        </div>
    );
};

export default Dashboard;
