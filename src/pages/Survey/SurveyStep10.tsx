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
            navigate('/survey/depression'); // 다음 단계로 이동하는 로직 추가
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
                <div className={styles.progress10}></div>
            </div>
            <div className={styles.content}>
                <h1 className={styles.introTitle}>부부 간의 난임 문제에 대한<br/>의사소통 빈도를 선택해주세요.</h1>
                <div className={styles.optionsContainer}>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '매일' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('매일')}
                    >
                        매일
                    </button>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '주 2~3회' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('주 2~3회')}
                    >
                        주 2~3회
                    </button>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '주 1회' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('주 1회')}
                    >
                        주 1회
                    </button>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '월 1~2회' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('월 1~2회')}
                    >
                        월 1~2회
                    </button>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '거의 없음' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('거의 없음')}
                    >
                        거의 없음
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
