import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/styles/Register.module.css';

const RegisterPage: React.FC = () => {
    return (
        <div className={styles.registerPage}>
            <h1>Register</h1>
            <form>
                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type="email" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Password</label>
                    <input type="password" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Confirm Password</label>
                    <input type="password" required />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default RegisterPage;
