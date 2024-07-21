import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Survey/SurveyDepression.module.css';

const SurveyDepression: React.FC = () => {
    const navigate = useNavigate();
    const [responses, setResponses] = useState<number[]>(Array(9).fill(-1));

    const handleOptionSelect = (index: number, score: number) => {
        const newResponses = [...responses];
        newResponses[index] = score;
        setResponses(newResponses);
    };

    const handleNextClick = () => {
        const totalScore = responses.reduce((acc, curr) => acc + curr, 0);
        navigate('/survey/depression/total', { state: { totalScore } });
    };

    return (
        <div className={styles.introPage}>
            <div className={styles.appBar}>
                <div className={styles.backIcon} onClick={() => navigate(-1)}></div>
                <div className={styles.logo}></div>
                <div className={styles.closeIcon} onClick={() => navigate('/')}></div>
            </div>
            <div className={styles.progressBar}>
                <div className={styles.progress11}></div>
            </div>
            <div className={styles.content}>
                <h1 className={styles.introTitle}>
                    우울증 테스트입니다.
                    <br />다음 문항들을 읽고 해당되는 곳에
                    <br />체크 표시를 해주세요.
                </h1>
                <div className={styles.optionsContainer}>
                    {[
                        '1. 기분이 가라앉거나, 우울하거나, 희망이 없다고 느꼈다.',
                        '2. 평소 하던 일에 대한 흥미가 없거나 즐거움을 느끼지 못했다.',
                        '3. 잠들기가 어렵거나 자주 깼다 혹은 너무 많이 잤다.',
                        '4. 평소보다 식욕이 줄었다/혹은 평소보다 많이 먹었다.',
                        '5. 다른 사람들이 눈치 챌 정도로 평소보다 말과 행동이 느려졌다 혹은 너무 안절부절 못해서 가만히 앉아 있을 수 없었다.',
                        '6. 피곤하고 기운이 없었다.',
                        '7. 내가 잘못 했거나, 실패했다는 생각이 들었다/혹은 자신과 가족을 실망시켰다고 생각했다.',
                        '8. 신문을 읽거나 TV를 보는 것과 같은 일상적인 일에도 집중 할 수 없었다.',
                        '9. 차라리 죽는 것이 낫겠다고 생각했다/혹은 자해할 생각을 했다.'
                    ].map((question, index) => (
                        <div key={index} className={styles.questionContainer}>
                            <p className={styles.questionText}>{question}</p>
                            <div className={styles.options}>
                                <button
                                    className={`${styles.optionBtn} ${responses[index] === 0 ? styles.active : ''}`}
                                    onClick={() => handleOptionSelect(index, 0)}
                                >
                                    없음
                                </button>
                                <button
                                    className={`${styles.optionBtn} ${responses[index] === 1 ? styles.active : ''}`}
                                    onClick={() => handleOptionSelect(index, 1)}
                                >
                                    2-6일
                                </button>
                                <button
                                    className={`${styles.optionBtn} ${responses[index] === 2 ? styles.active : ''}`}
                                    onClick={() => handleOptionSelect(index, 2)}
                                >
                                    7-12일
                                </button>
                                <button
                                    className={`${styles.optionBtn} ${responses[index] === 3 ? styles.active : ''}`}
                                    onClick={() => handleOptionSelect(index, 3)}
                                >
                                    거의 매일
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className={responses.every(response => response !== -1) ? styles.btnActive : styles.btnInactive}
                    onClick={handleNextClick}
                    disabled={responses.some(response => response === -1)}
                >
                    결과 보기
                </button>
            </div>
        </div>
    );
};

export default SurveyDepression;
