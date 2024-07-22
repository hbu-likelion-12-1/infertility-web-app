import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Onboarding.module.css';

const Onboarding1: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.onboardingContainer}>
            <div className={`${styles.image} ${styles.logo}`}></div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>안녕하세요!</h1>
                <p className={styles.subtitle}>AI 기반의 나의 맞춤형 마음 공유 서비스</p>
                <p className={styles.description}>WEBLOOM에 오신 것을 환영합니다</p>
            </div>
            <div className={styles.pagination}>
                <div className={`${styles.paginationDot} ${styles.active}`}></div>
                <div className={styles.paginationDot}></div>
                <div className={styles.paginationDot}></div>
                <div className={styles.paginationDot}></div>
            </div>
            <button className={styles.button} onClick={() => navigate('/onboarding2')}>다음</button>
        </div>
    );
};

export default Onboarding1;
