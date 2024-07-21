import Button from '../../components/common/Button';
import styles from '../../assets/styles/Survey/SurveyStep3.module.css';
import React from "react";

const SurveyStep3: React.FC = () => {
    return (
        <div className={styles.surveyStep}>
            <h1>Survey Step 3</h1>
            <Button text="Next" link="/survey/completion" />
        </div>
    );
};

export default SurveyStep3;
