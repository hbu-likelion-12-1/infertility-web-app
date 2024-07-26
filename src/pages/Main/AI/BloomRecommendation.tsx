import React from 'react';
import styles from '../../../assets/styles/Main/AI/BloomRecommendation.module.css';

const AIBloomRecommendation: React.FC = () => {
    return (
        <div className={styles.recommendationContainer}>
            <div className={styles.logo}></div>
            <p className={styles.title}>Bloom이 추천해요!</p>
            <p></p>

            {/* 추천 콘텐츠 추가 */}
        </div>
    );
};

export default AIBloomRecommendation;
