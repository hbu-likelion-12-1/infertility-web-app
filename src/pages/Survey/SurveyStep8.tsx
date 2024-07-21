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
            navigate('/survey/step9'); // 다음 단계로 이동하는 로직 추가
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
                <div className={styles.progress8}></div>
            </div>
            <div className={styles.content}>
                <h1 className={styles.introTitle}>난임 치료로 인한<br/>경제적 부담 정도를 선택해주세요.</h1>
                <div className={styles.optionsContainer}>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '매우 높음' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('매우 높음')}
                    >
                        매우 높음
                    </button>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '높음' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('높음')}
                    >
                        높음
                    </button>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '보통' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('보통')}
                    >
                        보통
                    </button>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '낮음' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('낮음')}
                    >
                        낮음
                    </button>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '매우 낮음' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('매우 낮음')}
                    >
                        매우 낮음
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
