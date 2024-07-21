import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/styles/Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
            </div>
            <ul className={styles.navLinks}>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
