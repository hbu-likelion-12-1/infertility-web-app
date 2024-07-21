import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/styles/Survey/SurveyStepDepression.module.css';

const SurveyStep5: React.FC = () => {
    const navigate = useNavigate();
    const [responses, setResponses] = useState<string[]>(Array(9).fill(''));

    const handleOptionSelect = (index: number, option: string) => {
        const newResponses = [...responses];
        newResponses[index] = option;
        setResponses(newResponses);
    };

    const handleNextClick = () => {
        if (responses.every(response => response !== '')) {
            navigate('/');
        }
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
                    <table className={styles.surveyTable}>
                        <thead>
                        <tr>
                            <th>문항</th>
                            <th>없음</th>
                            <th>2-6일</th>
                            <th>7-12일</th>
                            <th>거의 매일</th>
                        </tr>
                        </thead>
                        <tbody>
                        {[
                            '기분이 가라앉거나, 우울하거나, 희망이 없다고 느꼈다.',
                            '평소 하던 일에 대한 흥미가 없거나 즐거움을 느끼지 못했다.',
                            '잠들기가 어렵거나 자주 깼다 혹은 너무 많이 잤다.',
                            '평소보다 식욕이 줄었다 혹은 평소보다 많이 먹었다.',
                            '다른 사람들이 눈치 챌 정도로 평소보다 말과 행동이 느려졌다. 혹은 너무 안절부절 못해서 가만히 앉아 있을 수 없었다.',
                            '피곤하고 기운이 없었다.',
                            '내가 잘못 했거나, 실패했다는 생각이 들었다. 혹은 자신과 가족을 실망시켰다고 생각했다.',
                            '신문을 읽거나 TV를 보는 것과 같은 일상적인 일에도 집중 할 수 없었다.',
                            '차라리 죽는 것이 낫겠다고 생각했다. 혹은 자해할 생각을 했다.'
                        ].map((question, index) => (
                            <tr key={index}>
                                <td>{question}</td>
                                {['없음', '2-6일', '7-12일', '거의 매일'].map(option => (
                                    <td key={option}>
                                        <input
                                            type="radio"
                                            name={`question-${index}`}
                                            value={option}
                                            checked={responses[index] === option}
                                            onChange={() => handleOptionSelect(index, option)}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <button
                    className={responses.every(response => response !== '') ? styles.btnActive : styles.btnInactive}
                    onClick={handleNextClick}
                    disabled={responses.some(response => response === '')}
                >
                    다음
                </button>
            </div>
        </div>
    );
};

export default SurveyStep5;
