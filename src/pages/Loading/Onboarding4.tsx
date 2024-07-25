import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Loading/Onboarding.module.css';
import onboardImage4 from '../../assets/images/Onboard4.svg';

const Onboarding4: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.onboardingContainer}>
            <div className={styles.backgroundImage4} style={{backgroundImage: `url(${onboardImage4})`}}></div>
            <div className={styles.textContainer}>
                <p className={styles.intro1}>지금 바로 가입하고,</p>
                <p className={styles.intro2}>AI Bloom과 함께<br/>난임 극복을 위한 여정에<br/>행복의 꽃을 피워요!</p>
                <div className={styles.pagination}>
                    <div className={styles.paginationDot}></div>
                    <div className={styles.paginationDot}></div>
                    <div className={styles.paginationDot}></div>
                    <div className={`${styles.paginationDot} ${styles.active}`}></div>
                </div>
                <button className={styles.button} onClick={() => navigate('/login')}>난임 극복 여정 시작하기</button>
            </div>
        </div>
    );
};

export default Onboarding4;
