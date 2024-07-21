import React from 'react';
import styles from '../assets/styles/Dashboard.module.css';

const Dashboard: React.FC = () => {
    return (
        <div className={styles.dashboard}>
            <h1>Dashboard</h1>
            <p>Welcome to the Dashboard!</p>
        </div>
    );
};

export default Dashboard;
