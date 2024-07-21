import Button from '../components/common/Button';
import styles from '../assets/styles/Home.module.css';
import React from "react";

const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <h1>Welcome to WellBoom</h1>
            <Button text="Start Survey" link="/survey/intro" />
        </div>
    );
};

export default Home;
