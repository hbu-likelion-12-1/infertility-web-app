import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from '../../assets/styles/Survey/SurveyStepInfertility.module.css';

const SurveyStep5: React.FC = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    };

    const handleNextClick = () => {
        if (selectedOption) {
            navigate('/survey/step8'); // 다음 단계로 이동하는 로직 추가
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
                <div className={styles.progress7}></div>
            </div>
            <div className={styles.content}>
                <h1 className={styles.introTitle}>난임의 주된 원인을 선택해주세요.</h1>
                <div className={styles.optionsContainer}>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '여성 요인' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('여성 요인')}
                    >
                        여성 요인
                    </button>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '남성 요인' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('남성 요인')}
                    >
                        남성 요인
                    </button>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '양측 요인' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('양측 요인')}
                    >
                        양측 요인
                    </button>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '원인 불명' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('원인 불명')}
                    >
                        원인 불명
                    </button>
                </div>
                <button
                    className={selectedOption ? styles.btnActive : styles.btnInactive}
                    onClick={handleNextClick}
                    disabled={!selectedOption}
                >
                    다음
                </button>
            </div>
        </div>
    );
};

export default SurveyStep5;
