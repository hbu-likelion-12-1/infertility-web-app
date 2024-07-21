import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Survey/SurveyStepInfertility.module.css';

const SurveyStep4: React.FC = () => {
    const navigate = useNavigate();
    const [state, setState] = useState<string | null>(null);
    const [district, setDistrict] = useState<string | null>(null);
    const [town, setTown] = useState<string | null>(null);

    const handleNextClick = () => {
        if (state && district && town) {
            navigate('/survey/step5');
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
                <div className={styles.progress4}></div>
            </div>
            <div className={styles.content}>
                <h1 className={styles.introTitle}>살고 있는 지역을 선택해주세요.</h1>
                <div className={styles.dropdownContainer}>
                    <select className={styles.dropdown} value={state || ''} onChange={(e) => setState(e.target.value)}>
                        // 임시
                        <option value="" disabled>시·도</option>
                        <option value="대전광역시">대전광역시</option>
                        <option value="경기도">경기도</option>

                    </select>
                    <select className={styles.dropdown} value={district || ''} onChange={(e) => setDistrict(e.target.value)}>
                        // 임시
                        <option value="" disabled>시·군·구</option>
                        <option value="유성구">유성구</option>
                        <option value="서구">서구</option>
                    </select>
                    <select className={styles.dropdown} value={town || ''} onChange={(e) => setTown(e.target.value)}>
                        // 임시
                        <option value="" disabled>동·읍·면</option>
                        <option value="덕명동">덕명동</option>
                        <option value="궁동">궁동</option>
                    </select>
                </div>
                <button
                    className={state && district && town ? styles.btnActive : styles.btnInactive}
                    onClick={handleNextClick}
                    disabled={!state || !district || !town}
                >
                    다음
                </button>
            </div>
        </div>
    );
};

export default SurveyStep4;
