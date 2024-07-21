import React from 'react';
import styles from '../../assets/styles/Survey/SurveyResults.module.css';

const SurveyResults: React.FC = () => {
    return (
        <div className={styles.surveyResults}>
            <h1>Survey Results</h1>
            <p>Your survey results will be displayed here.</p>
        </div>
    );
};

export default SurveyResults;
