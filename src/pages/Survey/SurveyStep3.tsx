import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Survey/SurveyStep3.module.css';

const SurveyStep3: React.FC = () => {
    const navigate = useNavigate();
    const [year, setYear] = useState<string | null>(null);
    const [month, setMonth] = useState<string | null>(null);
    const [day, setDay] = useState<string | null>(null);

    const handleNextClick = () => {
        if (year && month && day) {
            navigate('/survey/step4');
        }
    };

    return (
        <div className={styles.introPage}>
            <div className={styles.appBar}>
                <div className={styles.backIcon} onClick={() => navigate(-1)}></div>
                <div className={styles.logo}></div>
                <div className={styles.closeIcon} onClick={() => navigate('/')}></div>
            </div>
            <div className={styles.progressBar}>
                <div className={styles.progress}></div>
            </div>
            <div className={styles.content}>
                <h1 className={styles.introTitle}>생년월일을 선택해주세요.</h1>
                <div className={styles.dropdownContainer}>
                    <select className={styles.dropdown} value={year || ''} onChange={(e) => setYear(e.target.value)}>
                        <option value="" disabled>YYYY</option>
                        {Array.from({ length: 100 }, (_, i) => 2024 - i).map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                    <select className={styles.dropdown} value={month || ''} onChange={(e) => setMonth(e.target.value)}>
                        <option value="" disabled>MM</option>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                            <option key={month} value={month}>{month < 10 ? `0${month}` : month}</option>
                        ))}
                    </select>
                    <select className={styles.dropdown} value={day || ''} onChange={(e) => setDay(e.target.value)}>
                        <option value="" disabled>DD</option>
                        {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                            <option key={day} value={day}>{day < 10 ? `0${day}` : day}</option>
                        ))}
                    </select>
                </div>
                <button
                    className={year && month && day ? styles.btnActive : styles.btnInactive}
                    onClick={handleNextClick}
                    disabled={!year || !month || !day}
                >
                    다음
                </button>
            </div>
        </div>
    );
};

export default SurveyStep3;
