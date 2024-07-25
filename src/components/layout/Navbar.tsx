import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../assets/styles/Layout/Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/home" className={({ isActive }) => isActive ? `${styles.icon} ${styles.homeIcon} ${styles.activeIcon}` : `${styles.icon} ${styles.homeIcon}`}>
                <div className={styles.icon}></div>
                <span className={styles.label}>홈</span>
            </NavLink>
            <NavLink to="/aibloom" className={({ isActive }) => isActive ? `${styles.icon} ${styles.bloomIcon} ${styles.activeIcon}` : `${styles.icon} ${styles.bloomIcon}`}>
                <div className={styles.icon}></div>
                <span className={styles.label}>AI Bloom</span>
            </NavLink>
            <NavLink to="/save" className={({ isActive }) => isActive ? `${styles.icon} ${styles.saveIcon} ${styles.activeIcon}` : `${styles.icon} ${styles.saveIcon}`}>
                <div className={styles.icon}></div>
                <span className={styles.label}>보관함</span>
            </NavLink>
        </nav>
    );
};

export default Navbar;
