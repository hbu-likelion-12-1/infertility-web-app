import React, { useState } from 'react';
import BloomReport from './BloomReport';
import AIBloomRecommendation from './BloomRecommendation';
import styles from '../../../assets/styles/Main/AI/AIBloom.module.css';
import Navbar from '../../../components/Navbar';

const AIBloom: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'report' | 'recommendation'>('report');

    return (
        <div className={styles.aibloomContainer}>
            <div className={styles.header}>
                <div className={styles.tabContainer}>
                    <div className={`${styles.tab} ${activeTab === 'report' ? styles.active : ''}`} onClick={() => setActiveTab('report')}>
                        Bloom 리포트
                    </div>
                    <div className={`${styles.tab} ${activeTab === 'recommendation' ? styles.active : ''}`} onClick={() => setActiveTab('recommendation')}>
                        Bloom 추천
                    </div>
                </div>
            </div>
            <div className={styles.tabContent}>
                {activeTab === 'report' && <BloomReport />}
                {activeTab === 'recommendation' && <AIBloomRecommendation />}
            </div>
            <Navbar />
        </div>
    );
};

export default AIBloom;
