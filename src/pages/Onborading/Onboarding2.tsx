import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Onboarding.module.css';

const Onboarding2: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.onboardingContainer}>
            <div className={`${styles.backgroundImage}`} style={{ backgroundImage: "url('../../assets/images/Onboard2.svg')" }}></div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>마음 공유로</h1>
                <h1 className={styles.title}>서로 힘이 되어줘요</h1>
                <p className={styles.description}>AI 상담가 Bloom의 24시간 맞춤형 질문으로<br />부부의 마음을 공유하며 서로 힘이 돼요.</p>
            </div>
            <div className={styles.pagination}>
                <div className={styles.paginationDot}></div>
                <div className={`${styles.paginationDot} ${styles.active}`}></div>
                <div className={styles.paginationDot}></div>
                <div className={styles.paginationDot}></div>
            </div>
            <button className={styles.button} onClick={() => navigate('/onboarding3')}>다음</button>
        </div>
    );
};

export default Onboarding2;
