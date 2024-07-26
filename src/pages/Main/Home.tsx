import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar.tsx';
// import speakIconImage from '../assets/icon/home/speak.svg';
// import messageIconImage from '../assets/icon/home/message.svg';
import styles from '../../assets/styles/Main/Home.module.css';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.homeContainer}>
            <div className={styles.logo}></div>
            <div className={styles.header}>
                <div className={styles.title}>아내님,</div>
                <div className={styles.subtitle}>오늘의 마음을 공유해주세요.</div>
                <div className={styles.questionBox}>
                    <div className={styles.questionTitle}>오늘의 마음 공유 질문</div>
                    <div className={styles.question}>Q1. 시술 실패 후 부부 간 갈등이 있었나요?</div>
                    <div className={styles.question}>서로를 이해하고 지지하는 방법은 무엇이었나요?</div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.section}>
                    <p className={styles.shareText}>아내</p>
                    <div className={styles.listItem}>
                        <button className={styles.shareButton} onClick={() => navigate('write')}>마음을 공유해주세요.</button>
                        <div className={styles.arrowButton}></div>
                    </div>
                    <p className={styles.shareText}>남편</p>
                    <div className={styles.listItem}>
                        <button className={styles.sharedButton} onClick={() => navigate('/shared')}>마음 공유를 완료하였습니다!
                        </button>
                        <div className={styles.arrowButton}></div>
                    </div>
                </div>
                {/*<div className={styles.messagePrompt}>서로에게 힘이 될 수 있도록</div>*/}
                {/*<div className={styles.messagePrompt2}>음성 메시지를 남겨주세요.</div>*/}
                {/*<div className={styles.voiceMessage}>*/}
                {/*    <div className={styles.voiceIcon}>*/}
                {/*        <img src={speakIconImage} alt="Voice Icon"/>*/}
                {/*    </div>*/}
                {/*    <div className={styles.messageIcon}>*/}
                {/*        <img src={messageIconImage} alt="Message Icon"/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <Navbar/>
        </div>
    );
};

export default Home;
