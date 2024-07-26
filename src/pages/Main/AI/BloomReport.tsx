import React from 'react';
import styles from '../../../assets/styles/Main/AI/BloomReport.module.css';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const AIBloomReport: React.FC = () => {
    const chartData = {
        labels: ['7/1', '7/2', '7/3', '7/4', '7/5', '7/6', '7/7'],
        datasets: [
            {
                label: '아내',
                data: [3, 4, 3, 5, 4, 3, 2],
                borderColor: '#FFD700',
                backgroundColor: '#FFD700',
                fill: false,
                tension: 0.1,
            },
            {
                label: '남편',
                data: [2, 2, 3, 3, 4, 4, 5],
                borderColor: '#4169E1',
                backgroundColor: '#4169E1',
                fill: false,
                tension: 0.1,
            },
        ],
    };

    return (
        <div className={styles.reportContainer}>
            <div className={styles.logo}></div>
            <p className={styles.title}>Bloom의 응원과 조언</p>
            <div className={styles.feedback}>
                <p>응원과 조언의 피드백 (최대 300자)</p>
            </div>
            <p className={styles.title}>주간 부부 감정 추이</p>
            <div className={styles.chartContainer}>
                <Line data={chartData}/>
            </div>
        </div>
    );
};

export default AIBloomReport;
