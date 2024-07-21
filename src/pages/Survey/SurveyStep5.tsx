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
            navigate('/survey/step6'); // 다음 단계로 이동하는 로직 추가
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
                <div className={styles.progress5}></div>
            </div>
            <div className={styles.content}>
                <h1 className={styles.introTitle}>난임 진단 시기를 선택해주세요.</h1>
                <div className={styles.optionsContainer}>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '6개월 미만' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('6개월 미만')}
                    >
                        6개월 미만
                    </button>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '6개월에서 1년' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('6개월에서 1년')}
                    >
                        6개월에서 1년
                    </button>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '1년 이상 2년 미만' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('1년 이상 2년 미만')}
                    >
                        1년 이상 2년 미만
                    </button>
                    <button
                        className={`${styles.optionBtn} ${selectedOption === '2년 이상' ? styles.active : ''}`}
                        onClick={() => handleOptionSelect('2년 이상')}
                    >
                        2년 이상
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
