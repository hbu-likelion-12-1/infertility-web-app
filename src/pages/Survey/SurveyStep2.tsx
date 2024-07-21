import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Survey/SurveyStep2.module.css';

const SurveyStep2: React.FC = () => {
    const navigate = useNavigate();
    const [selectedGender, setSelectedGender] = useState<string | null>(null);

    const handleGenderSelect = (gender: string) => {
        setSelectedGender(gender);
    };

    const handleNextClick = () => {
        if (selectedGender) {
            navigate('/survey/step3');
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
                <h1 className={styles.introTitle}>성별을 선택해주세요.</h1>
                <div className={styles.genderBox}>
                    <button
                        className={`${styles.genderBtn} ${selectedGender === 'female' ? styles.active : ''}`}
                        onClick={() => handleGenderSelect('female')}
                    >
                        여자
                    </button>
                    <button
                        className={`${styles.genderBtn} ${selectedGender === 'male' ? styles.active : ''}`}
                        onClick={() => handleGenderSelect('male')}
                    >
                        남자
                    </button>
                </div>
                <button
                    className={selectedGender ? styles.btnActive : styles.btnInactive}
                    onClick={handleNextClick}
                    disabled={!selectedGender}
                >
                    다음
                </button>
            </div>
        </div>
    );
};

export default SurveyStep2;
