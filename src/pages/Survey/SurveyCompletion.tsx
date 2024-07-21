import Button from '../../components/common/Button';
import styles from '../../assets/styles/Survey/SurveyCompletion.module.css';
import React from "react";

const SurveyCompletion: React.FC = () => {
    return (
        <div className={styles.surveyCompletion}>
            <h1>Survey Completion</h1>
            <p>Thank you for completing the survey!</p>
            <Button text="Go to Home" link="/" />
        </div>
    );
};

export default SurveyCompletion;
