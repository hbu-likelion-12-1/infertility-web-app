import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

interface ButtonProps {
    text: string;
    link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
    return (
        <Link to={link} className={styles.button}>
            {text}
        </Link>
    );
};

export default Button;
