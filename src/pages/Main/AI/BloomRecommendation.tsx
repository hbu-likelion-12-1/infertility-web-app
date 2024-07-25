import React from 'react';
import styles from '../../../assets/styles/Main/AI/BloomRecommendation.module.css';
import logo from '../../../assets/images/logo.svg';

const BloomRecommendation: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={logo} alt="Bloom Flower" className={styles.flowerIcon} />
                <div className={styles.recommendation}>
                    <h2>Bloom이 추천해요!</h2>
                    <p>아내님, 이번 주말 남편과 산책 어떠세요?</p>
                </div>
            </div>
            <div className={styles.recommendations}>
                <h3>내 주변 산책로</h3>
                {/* 추천 내용을 여기에 추가하세요 */}
            </div>
            <div className={styles.policy}>
                <h3>서울시 난임 부부 정책 & 프로그램</h3>
                {/* 정책 및 프로그램 내용을 여기에 추가하세요 */}
            </div>
            <div className={styles.videos}>
                <h3>배란 주사 유튜브 영상</h3>
                {/* 유튜브 영상 내용을 여기에 추가하세요 */}
            </div>
        </div>
    );
};

export default BloomRecommendation;
