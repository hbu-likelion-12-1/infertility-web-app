import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/styles/PartnerConnectionInput.module.css';

const PartnerConnectionInput: React.FC = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState('');

    const handleConnect = () => {
        if (code) {
            // logic to connect with the partner's code
            alert('코드가 연결되었습니다.');
        }
    };

    return (
        <div className={styles.introPage}>
            <div className={styles.appBar}>
                <div className={styles.backIcon} onClick={() => navigate(-1)}></div>
                <div className={styles.logo}></div>
                <div className={styles.closeIcon} onClick={() => navigate('/')}></div>
            </div>
            <div className={styles.content}>
                <h1 className={styles.introTitle}>부부 코드를 입력해주세요.</h1>
                <input
                    type="text"
                    className={styles.inputField}
                    placeholder="터치하여 입력해주세요."
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                <button
                    className={code ? styles.btnActive : styles.btnInactive}
                    onClick={handleConnect}
                    disabled={!code}
                >
                    배우자와 연결하기
                </button>
                <button className={styles.recoverButton}>
                    계정 복구가 필요하신가요?
                </button>
            </div>
        </div>
    );
};

export default PartnerConnectionInput;
