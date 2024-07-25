import React from 'react';
import styles from '../../../assets/styles/Main/AI/BloomReport.module.css';
import logo from '../../../assets/images/logo.svg';

const BloomReport: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={logo} alt="Bloom Flower" className={styles.flowerIcon} />
                <div className={styles.feedback}>
                    <h2>Bloom의 응원과 조언</h2>
                    <p>응원과 조언의 피드백 (최대 300자)</p>
                </div>
            </div>
            <div className={styles.chart}>
                <h2>주간 부부 감정 추이</h2>
                {/* 여기에 차트를 추가하세요 */}
            </div>
        </div>
    );
};

export default BloomReport;
