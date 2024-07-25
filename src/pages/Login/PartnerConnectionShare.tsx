import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Login/PartnerConnectionShare.module.css';

const PartnerConnectionShare: React.FC = () => {
    const navigate = useNavigate();
    const code = "ofe1zoa02"; // 임시 작성

    const handleInvite = () => {
        alert('초대장이 공유되었습니다.');
    };

    const handleConnect = () => {
        navigate('/partner/connection-input');
    };

    return (
        <div className={styles.introPage}>
            <div className={styles.appBar}>
                <div className={styles.backIcon} onClick={() => navigate(-1)}></div>
                <div className={styles.logo}></div>
                <div className={styles.closeIcon} onClick={() => navigate('/')}></div>
            </div>
            <div className={styles.content}>
                <h1 className={styles.introTitle}>부부 연결을 하고<br/>마음 공유를 시작해보세요.</h1>
                <div className={styles.code}>
                    나의 코드 복사하기!!
                    <br/>
                    <span className={styles.codeValue}>{code}</span>
                </div>
                <button className={styles.inviteButton} onClick={handleInvite}>
                    배우자에게 초대장 보내기
                </button>
                <button className={styles.connectButton} onClick={handleConnect}>
                    배우자의 코드로 연결하기
                </button>
            </div>
        </div>
    );
};

export default PartnerConnectionShare;
