import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/styles/Splash.module.css';

const Splash: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/onboarding1');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className={styles.splash}>
            <div className={styles.logo}></div>
            <h1>WeBloom</h1>
            <p>우리가 함께 행복을 꽃 피워요</p>
        </div>
    );
};

export default Splash;
