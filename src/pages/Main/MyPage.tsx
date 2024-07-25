import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Main/MyPage.module.css';

const MyPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.backIcon} onClick={() => navigate(-1)}></div>
                <h1 className={styles.title}>마이페이지</h1>
            </header>
            <ul className={styles.list}>
                <li className={styles.listItem} onClick={() => navigate('/logout')}>
                    로그아웃
                    <span className={styles.arrow}></span>
                </li>
                <li className={styles.listItem} onClick={() => navigate('/edit-profile')}>
                    회원 정보 수정
                    <span className={styles.arrow}></span>
                </li>
                <li className={styles.listItem} onClick={() => navigate('/inquiry')}>
                    문의하기
                    <span className={styles.arrow}></span>
                </li>
                <li className={styles.listItem} onClick={() => navigate('/couple-settings')}>
                    부부 연결 설정
                    <span className={styles.arrow}></span>
                </li>
            </ul>
        </div>
    );
};

export default MyPage;
