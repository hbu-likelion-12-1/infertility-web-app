import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Onboarding.module.css';

const Onboarding4: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.onboardingContainer}>
            <div className={`${styles.image} ${styles.onboardImage4}`}></div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>지금 바로 가입하고,</h1>
                <p className={styles.subtitle}>AI Bloom과 함께</p>
                <p className={styles.description}>난임 극복을 위한 여정에 행복의 꽃을 피워요!</p>
            </div>
            <div className={styles.pagination}>
                <div className={styles.paginationDot}></div>
                <div className={styles.paginationDot}></div>
                <div className={styles.paginationDot}></div>
                <div className={`${styles.paginationDot} ${styles.active}`}></div>
            </div>
            <button className={styles.button} onClick={() => navigate('/home')}>난임 극복 여정 시작하기</button>
        </div>
    );
};

export default Onboarding4;
