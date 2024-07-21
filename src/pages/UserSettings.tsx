import React from 'react';
import styles from '../assets/styles/UserSettings.module.css';

const UserSettings: React.FC = () => {
    return (
        <div className={styles.userSettings}>
            <h1>User Settings</h1>
            <p>Manage your settings here.</p>
        </div>
    );
};

export default UserSettings;
