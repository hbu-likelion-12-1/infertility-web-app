import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Loading/Onboarding.module.css';
import onboardImage1 from '../../assets/images/Onboard1.svg';

const Onboarding1: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.onboardingContainer}>
            <div className={styles.backgroundImage1} style={{backgroundImage: `url(${onboardImage1})`}}></div>
            <div className={styles.textContainer}>
                <p className={styles.intro1}>안녕하세요!</p>
                <p className={styles.intro2}>AI기반<br/> 나의 맞춤형 마음 공유 서비스<br/>WEBLOOM에 오신 것을 환영합니다.</p>
                <div className={styles.pagination}>
                    <div className={`${styles.paginationDot} ${styles.active}`}></div>
                    <div className={styles.paginationDot}></div>
                    <div className={styles.paginationDot}></div>
                    <div className={styles.paginationDot}></div>
                </div>
                <button className={styles.button} onClick={() => navigate('/onboarding2')}>다음</button>
            </div>
        </div>
    );
};

export default Onboarding1;
