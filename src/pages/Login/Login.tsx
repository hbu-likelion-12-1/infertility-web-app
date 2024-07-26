import React, { useEffect } from 'react';
import styles from '../../assets/styles/Login/Login.module.css';
import { Server } from '@/api';

const LoginPage: React.FC = () => {

    const handleKakaoLogin = async () => {
        try {
            const url = await Server.Kakao.getKakaoPublishAuthCodeUrl();
            window.location.href = url;  // 카카오 로그인 페이지로 리디렉션
        } catch (error) {
            console.error("카카오 로그인 URL을 가져오는 데 실패했습니다.", error);
        }
    };

    useEffect(() => {
        // URL에 인증 코드가 포함되어 있는지 확인
        const query = new URLSearchParams(window.location.search);
        const authCode = query.get('code');

        if (authCode) {
            // 인증 코드가 있을 경우 로그인 처리
            Server.Kakao.login(authCode).then(response => {
                // 로그인 성공 처리
                console.log('로그인 성공:', response);
                // accessToken, user 정보 저장 등 추가 처리
            }).catch(error => {
                console.error('로그인 실패:', error);
            });
        }
    }, []);

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContent}>
                <div className={styles.logo}></div>
                <h1 className={styles.loginh1}>WeBloom</h1>
                <p className={styles.loginp}>우리가 함께 행복을 꽃 피워요</p>
                <p className={styles.loginp}>난임 부부 맞춤형 마음 공유 서비스</p>
                <button className={styles.loginButton} onClick={handleKakaoLogin}>
                    <span className={styles.kakaoIcon}></span>
                    카카오로 3초만에 시작하기
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
