import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignupStore } from '@/store/signupStore';
import styles from '@/assets/styles/Survey/SurveyStep1.module.css';

const SurveyStep1: React.FC = () => {
    const [nickname, setNickname] = useState('');
    const setSignupData = useSignupStore((state) => state.setSignupData);
    const navigate = useNavigate();

    const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length <= 10) {
            setNickname(e.target.value);
        }
    };

    const handleNextClick = () => {
        if (nickname.length > 0) {
            setSignupData({ username: nickname });
            navigate('/survey/step2');
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
                <h1 className={styles.introTitle}>닉네임 혹은 애칭을 입력해주세요.</h1>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="터치하여 입력해주세요."
                        value={nickname}
                        onChange={handleNicknameChange}
                        className={styles.inputField}
                    />
                    <span className={styles.charCount}>{nickname.length}/10</span>
                </div>
                <button
                    className={nickname.length > 0 ? styles.btnActive : styles.btnInactive}
                    onClick={handleNextClick}
                    disabled={nickname.length === 0}
                >
                    다음
                </button>
            </div>
        </div>
    );
};

// @ts-ignore
export default SurveyStep1;