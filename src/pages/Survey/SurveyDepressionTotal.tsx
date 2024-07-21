import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Survey/SurveyDepressionTotal.module.css';

const SurveyDepressionResult: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const totalScore = location.state.totalScore;

    let resultHeader = '';
    let resultText = '';
    if (totalScore >= 0 && totalScore <= 4) {
        resultHeader = '정상';
        resultText = '건강한 마음건강을 위해 여가활동 등으로 스트레스를 적절히 관리해주세요.';
    } else if (totalScore >= 5 && totalScore <= 9) {
        resultHeader = '가벼운 우울';
        resultText = '규칙적인 식수면을 유지하여 생체리듬을 규칙적으로 유지 해주세요.';
    } else if (totalScore >= 10 && totalScore <= 14) {
        resultHeader = '중등도 우울';
        resultText = '일상생활 수행능력의 저하, 혹은 우울감으로 인한 신체적 정서적 불편감이 지속 될 시 전문가의 개입이 필요합니다.';
    } else if (totalScore >= 15 && totalScore <= 19) {
        resultHeader = '심한 우울';
        resultText = '점수가 높을수록 우울의 정도가 심한 것을 의미 합니다. 전문가와 심층상담 및 적절한 치료 등의 노력, 주변의 도움이 필요 합니다.';
    } else if (totalScore >= 20) {
        resultHeader = '심한 우울';
        resultText = '점수가 높을수록 우울의 정도가 심한 것을 의미 합니다. 전문가와 심층상담 및 적절한 치료 등의 노력, 주변의 도움이 필요 합니다.';
    }

    return (
        <div className={styles.resultPage}>
            <div className={styles.appBar}>
                <div className={styles.backIcon} onClick={() => navigate(-1)}></div>
                <div className={styles.logo}></div>
                <div className={styles.closeIcon} onClick={() => navigate('/')}></div>
            </div>
            <div className={styles.progressBar}>
                <div className={styles.progress}></div>
            </div>
            <div className={styles.content}>
                <h1 className={styles.resultTitle}>우울증 테스트 결과</h1>
                <div className={styles.resultScore}>{totalScore}점</div>
                <div className={styles.resultContainer}>
                    <div className={styles.resultHeader}>{resultHeader}</div>
                    <div className={styles.resultText}>{resultText}</div>
                </div>
                <button
                    className={styles.nextButton}
                    onClick={() => navigate('/partner')} // 다음 스텝으로 이동하는 로직 추가
                >
                    고생하셨어요! 이제 마지막 단계만 남았어요.
                </button>
            </div>
        </div>
    );
};

export default SurveyDepressionResult;
