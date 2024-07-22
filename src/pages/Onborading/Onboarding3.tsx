import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Onboarding.module.css';

const Onboarding3: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.onboardingContainer}>
            <div className={`${styles.image} ${styles.onboardImage3}`}></div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>난임 스트레스</h1>
                <p className={styles.subtitle}>함께 관리해요</p>
                <p className={styles.description}>AI 상담가 Bloom의 따뜻한 격려와 조언, 분석 리포트, 추천 콘텐츠를 통해 부부가 함께 난임 스트레스를 관리해요.</p>
            </div>
            <div className={styles.pagination}>
                <div className={styles.paginationDot}></div>
                <div className={styles.paginationDot}></div>
                <div className={`${styles.paginationDot} ${styles.active}`}></div>
                <div className={styles.paginationDot}></div>
            </div>
            <button className={styles.button} onClick={() => navigate('/onboarding4')}>다음</button>
        </div>
    );
};

export default Onboarding3;
