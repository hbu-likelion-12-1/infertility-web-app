import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Loading/Onboarding.module.css';
import onboardImage3 from '../../assets/images/Onboard3.svg';

const Onboarding3: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.onboardingContainer}>
            <div className={styles.backgroundImage3} style={{backgroundImage: `url(${onboardImage3})`}}></div>
            <div className={styles.textContainer}>
                <p className={styles.title1}>난임 스트레스</p>
                <p className={styles.title2}>함께 관리해요</p>
                <p className={styles.description}>AI 상담가 Bloom의<br/>따뜻한 격려와 조언, 분석 리포트,<br/>추천 콘텐츠를 통해<br/>부부가 함께 난임 스트레스를 관리해요.</p>
                <div className={styles.pagination}>
                    <div className={styles.paginationDot}></div>
                    <div className={styles.paginationDot}></div>
                    <div className={`${styles.paginationDot} ${styles.active}`}></div>
                    <div className={styles.paginationDot}></div>
                </div>
                <button className={styles.button} onClick={() => navigate('/onboarding4')}>다음</button>
            </div>
        </div>
    );
};

export default Onboarding3;
