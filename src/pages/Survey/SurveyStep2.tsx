import Button from '../../components/common/Button';
import styles from '../../assets/styles/Survey/SurveyStep2.module.css';
import React from "react";

const SurveyStep2: React.FC = () => {
    return (
        <div className={styles.surveyStep}>
            <h1>Survey Step 2</h1>
            <Button text="Next" link="/survey/step3" />
        </div>
    );
};

export default SurveyStep2;
