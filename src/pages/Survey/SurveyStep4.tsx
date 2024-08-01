import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignupStore } from '@/store/signupStore';
import styles from '../../assets/styles/Survey/SurveyStepInfertility.module.css';

const SurveyStep4: React.FC = () => {
    const navigate = useNavigate();
    const [state, setState] = useState<string | null>(null);
    const [district, setDistrict] = useState<string | null>(null);
    const [town, setTown] = useState<string | null>(null);
    const [regions, setRegions] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);
    const [towns, setTowns] = useState<string[]>([]);
    const setSignupData = useSignupStore((state) => state.setSignupData);

    useEffect(() => {
        // 시/도 데이터 로드
        fetch('../../assets/json/regions.json')
            .then((response) => response.json())
            .then((data) => setRegions(data.regions));
    }, []);

    useEffect(() => {
        if (state) {
            // 시/군/구 데이터 로드
            fetch('../../assets/json/cities.json')
                .then((response) => response.json())
                .then((data) => setCities(data[state] || []));
        } else {
            setCities([]);
        }
        setDistrict(null);
        setTowns([]);
    }, [state]);

    useEffect(() => {
        if (state && district) {
            // 동/읍/면 데이터 로드
            fetch('../../assets/json/towns.json')
                .then((response) => response.json())
                .then((data) => setTowns(data[state][district] || []));
        } else {
            setTowns([]);
        }
        setTown(null);
    }, [district, state]);

    const handleNextClick = () => {
        if (state && district && town) {
            setSignupData({ region: state, city: district, town: town });
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
                        <option value="" disabled>시·도</option>
                        {regions.map((region) => (
                            <option key={region} value={region}>{region}</option>
                        ))}
                    </select>
                    <select className={styles.dropdown} value={district || ''} onChange={(e) => setDistrict(e.target.value)}>
                        <option value="" disabled>시·군·구</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                    <select className={styles.dropdown} value={town || ''} onChange={(e) => setTown(e.target.value)}>
                        <option value="" disabled>동·읍·면</option>
                        {towns.map((town) => (
                            <option key={town} value={town}>{town}</option>
                        ))}
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
