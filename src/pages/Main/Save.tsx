import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Main/Save.module.css';

const Save: React.FC = () => {
    const navigate = useNavigate();

    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    const dummyList = [
        "Q1. 시술 실패 후",
        "Q2. 시술 실패 후 부부 간 갈등이나 문제가 발생한 적 있나요?",
        "Q3. 시술 실패 후 부부 간 갈등이나 문제가 발생한 적 있나요?",
        "Q4. 시술 실패 후 부부 간 갈등이나 문제가 발생한 적 있나요?",
        "Q5. 시술 실패 후 부부 간 갈등이나 문제가 발생한 적 있나요?"
    ];

    return (
        <div className={styles.saveContainer}>
            <header className={styles.header}>
                <button className={styles.profileButton} onClick={() => navigate('/my_page')}></button>
            </header>
            <div className={styles.title}>
                <p>마음 공유 보관함</p>
            </div>
            <div className={styles.content}>
                {dummyList.map((item, index) => (
                    <div key={index} className={styles.listItem}>
                        <span>{truncateText(item, 20)}</span>
                        <button className={styles.arrowButton} onClick={() => navigate(`/detail/${index}`)}></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Save;
