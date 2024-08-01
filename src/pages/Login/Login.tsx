import React, { useEffect, useRef } from 'react';
import styles from '../../assets/styles/Login/Login.module.css';
import { Server } from '@/api';
import { useLocation, useSearchParams } from "react-router-dom";

const LoginPage: React.FC = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const hasFetched = useRef(false);


  const handleKakaoLogin = async () => {
    try {
      const { url } = await Server.Kakao.getKakaoPublishAuthCodeUrl();
      localStorage.setItem("referrer", location.pathname);
      window.location.href = url;  // 카카오 로그인 페이지로 리디렉션
    } catch (error) {
      console.error("카카오 로그인 URL을 가져오는 데 실패했습니다.", error);
    }
  };

  useEffect(() => {
    (async () => {
      if (hasFetched.current) return;
      hasFetched.current = true;
      const authCode = searchParams.get("code");
      if (!authCode) return;
      try {
        const user = await Server.Kakao.login(authCode);
        if (!user) { // 회원가입 처리

        }
        console.log({ user });
      } catch (error) {
        console.error(error);
        alert("로그인에 실패하였습니다. 관리자에게 문의해주세요");
      }
    })();
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
