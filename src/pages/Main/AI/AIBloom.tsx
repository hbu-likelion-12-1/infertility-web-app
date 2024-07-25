import React, { useState } from 'react';
import styles from '../../../assets/styles/Main/AI/AIBloom.module.css';
import BloomReport from './BloomReport';
import BloomRecommendation from './BloomRecommendation';

const AIBloom: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'report' | 'recommendation'>('report');

    const handleTabChange = (tab: 'report' | 'recommendation') => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.container}>
            <div className={styles.tabContainer}>
                <div
                    className={`${styles.tab} ${activeTab === 'report' ? styles.activeTab : ''}`}
                    onClick={() => handleTabChange('report')}
                >
                    Bloom 리포트
                </div>
                <div
                    className={`${styles.tab} ${activeTab === 'recommendation' ? styles.activeTab : ''}`}
                    onClick={() => handleTabChange('recommendation')}
                >
                    Bloom 추천
                </div>
            </div>
            <div className={styles.content}>
                {activeTab === 'report' ? <BloomReport /> : <BloomRecommendation />}
            </div>
        </div>
    );
};

export default AIBloom;
