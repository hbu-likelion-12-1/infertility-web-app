import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Loading/Onboarding.module.css';
import onboardImage2 from '../../assets/images/Onboard2.svg';

const Onboarding2: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.onboardingContainer}>
            <div className={styles.backgroundImage2} style={{backgroundImage: `url(${onboardImage2})`}}></div>
            <div className={styles.textContainer}>
                <p className={styles.title1}>마음 공유로</p>
                <p className={styles.title2}>서로 힘이 되어줘요</p>
                <p className={styles.description}>AI 상담가 Bloom의<br/>24시간 맞춤형 질문으로<br/>부부의 마음을 공유하며 서로 힘이 돼요.</p>
                <div className={styles.pagination}>
                    <div className={styles.paginationDot}></div>
                    <div className={`${styles.paginationDot} ${styles.active}`}></div>
                    <div className={styles.paginationDot}></div>
                    <div className={styles.paginationDot}></div>
                </div>
                <button className={styles.button} onClick={() => navigate('/onboarding3')}>다음</button>
            </div>
        </div>
    );
};

export default Onboarding2;
