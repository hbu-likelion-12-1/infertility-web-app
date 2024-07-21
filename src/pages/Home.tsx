import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/styles/Home.module.css';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [isMessageShared, setIsMessageShared] = useState(false);
    const [receivedMessage, setReceivedMessage] = useState(false);

    const handleShareMessageClick = () => {
        setIsMessageShared(true);
        navigate('/share');
    };

    const handleViewReceivedMessageClick = () => {
        setReceivedMessage(true);
        navigate('/share/complete');
    };

    return (
        <div className={styles.homePage}>
            <header className={styles.header}>
                <div className={styles.logo}></div>
            </header>

            <main className={styles.mainContent}>
                <div className={styles.messageCard}>
                    <h1>아내님, 오늘의 마음을 공유해주세요.</h1>
                    <p className={styles.messageTitle}>오늘의 마음 공유 질문</p>
                    <p>Q1. 신혼 생활 부부 간 갈등이 있었나요? 서로를 이해하고 지지하는 방법은 무엇이었나요?</p>
                </div>

                <div className={styles.shareSection}>
                    <div className={styles.shareOption}>
                        <p>아내</p>
                        <button onClick={handleShareMessageClick}>
                            {isMessageShared ? "마음 공유를 완료했습니다!" : "마음을 공유해주세요."}
                            <div className={styles.shareIcon}></div>
                        </button>
                    </div>
                    <div className={styles.shareOption}>
                        <p>남편</p>
                        <button onClick={handleViewReceivedMessageClick}>
                            {receivedMessage ? "메시지를 확인하였습니다." : "마음 공유를 완료했습니다!"}
                            <div className={styles.shareIcon}></div>
                        </button>
                    </div>
                </div>

                <div className={styles.messageSection}>
                    <h2>서로에게 힘이 될 수 있도록 음성 메시지를 남겨주세요.</h2>
                    <div className={styles.messageOptions}>
                        <button onClick={() => navigate('/audio')}>
                            <div className={styles.audioIcon}></div>
                            <p>들어보기</p>
                        </button>
                        <button onClick={() => navigate('/audio/record')}>
                            <div className={styles.recordIcon}></div>
                            <p>다시 녹음하기</p>
                        </button>
                        <button onClick={() => navigate('/audio/send')}>
                            <div className={styles.sendIcon}></div>
                            <p>전송하기</p>
                        </button>
                    </div>
                </div>
            </main>

            <nav className={styles.tabBar}>
                <button onClick={() => navigate('/')}>
                    <div className={styles.homeIcon}></div>
                    홈
                </button>
                <button onClick={() => navigate('/ai-bloom')}>
                    <div className={styles.aiBloomIcon}></div>
                    AI Bloom
                </button>
                <button onClick={() => navigate('/save')}>
                    <div className={styles.saveIcon}></div>
                    보관함
                </button>
            </nav>
        </div>
    );
};

export default Home;
