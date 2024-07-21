import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/styles/Onboarding.module.css';

const Onboarding: React.FC = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/login');
    };

    return (
        <div className={styles.onboarding}>
            <div className={styles.content}>
                <h2>서비스 소개 텍스트</h2>
                {/*<img src="/path/to/service-image.png" alt="서비스 이미지" />*/}
            </div>
            <button onClick={handleStartClick} className={styles.startButton}>
                다음 (or 다음으로 시작하기)
            </button>
        </div>
    );
};

export default Onboarding;
