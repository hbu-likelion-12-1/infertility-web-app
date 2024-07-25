import React from 'react';
import styles from '../../assets/styles/Login/Login.module.css';

const LoginPage: React.FC = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContent}>
                <div className={styles.logo}></div>
                <h1 className={styles.loginh1}>WeBloom</h1>
                <p className={styles.loginp}>우리가 함께 행복을 꽃 피워요</p>
                <p className={styles.loginp}>난임 부부 맞춤형 마음 공유 서비스</p>
                <button className={styles.loginButton}>
                    <span className={styles.kakaoIcon}></span>
                    카카오로 3초만에 시작하기
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
