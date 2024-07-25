import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Main/WriteMood.module.css';
import happyIcon from '../../assets/icon/mood/happy.svg';
import goodIcon from '../../assets/icon/mood/good.svg';
import normalIcon from '../../assets/icon/mood/normal.svg';
import badIcon from '../../assets/icon/mood/bad.svg';
import verybadIcon from '../../assets/icon/mood/verybad.svg';

const WriteMood: React.FC = () => {
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const [selectedMood, setSelectedMood] = useState('');
    const maxChar = 200;

    const handleMoodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedMood(e.target.value);
    };

    const handleBackClick = () => {
        navigate(-1); // navigate to the previous page
    };

    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <button className={styles.backButton} onClick={handleBackClick}></button>
                <p>마음 공유하기</p>
            </div>

            <div className={styles.moodSection}>
                <div className={styles.moodTitle}>현재 본인의 기분을 선택해주세요.</div>
                <div className={styles.moodIcons}>
                    <div className={styles.moodIcon}>
                        <img src={happyIcon} alt="매우 좋음"/>
                        <label>매우 좋음</label>
                        <input
                            type="radio"
                            name="mood"
                            value="매우 좋음"
                            checked={selectedMood === '매우 좋음'}
                            onChange={handleMoodChange}
                        />
                    </div>
                    <div className={styles.moodIcon}>
                        <img src={goodIcon} alt="좋음"/>
                        <label>좋음</label>
                        <input
                            type="radio"
                            name="mood"
                            value="좋음"
                            checked={selectedMood === '좋음'}
                            onChange={handleMoodChange}
                        />
                    </div>
                    <div className={styles.moodIcon}>
                        <img src={normalIcon} alt="보통"/>
                        <label>보통</label>
                        <input
                            type="radio"
                            name="mood"
                            value="보통"
                            checked={selectedMood === '보통'}
                            onChange={handleMoodChange}
                        />
                    </div>
                    <div className={styles.moodIcon}>
                        <img src={badIcon} alt="나쁨"/>
                        <label>나쁨</label>
                        <input
                            type="radio"
                            name="mood"
                            value="나쁨"
                            checked={selectedMood === '나쁨'}
                            onChange={handleMoodChange}
                        />
                    </div>
                    <div className={styles.moodIcon}>
                        <img src={verybadIcon} alt="매우 나쁨"/>
                        <label>매우 나쁨</label>
                        <input
                            type="radio"
                            name="mood"
                            value="매우 나쁨"
                            checked={selectedMood === '매우 나쁨'}
                            onChange={handleMoodChange}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.questionSection}>
                <div className={styles.question}>Q1. 시술 실패 후 부부 간 갈등이 있었나요?</div>
                <div className={styles.question}>서로를 이해하고 지지하는 방법은 무엇이었나요?</div>
                <textarea
                    className={styles.textArea}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    maxLength={maxChar}
                    placeholder="최대 200자까지 입력 가능합니다."
                />
                <div className={styles.charCount}>{text.length}/{maxChar}</div>
            </div>
            <button className={styles.submitButton}>작성 완료</button>
        </div>
    );
};

export default WriteMood;
