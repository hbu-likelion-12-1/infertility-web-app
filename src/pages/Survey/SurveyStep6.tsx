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
            navigate('/survey/step7'); // 다음 단계로 이동하는 로직 추가
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
                <div className={styles.progress6}></div>
            </div>
            <div className={styles.content}>
                <h1 className={styles.introTitle}>현재 해당하는 난임 치료 상황을<br/>선택해주세요.</h1>
                <div className={styles.optionsContainer}>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '검사 단계' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('검사 단계')}
                    >
                        검사 단계
                    </button>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '배란 유도' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('배란 유도')}
                    >
                        배란 유도
                    </button>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '인공 수정' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('인공 수정')}
                    >
                        인공 수정
                    </button>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '체외 수정' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('체외 수정')}
                    >
                        체외 수정
                    </button>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '치료 중단' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('치료 중단')}
                    >
                        치료 중단
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
