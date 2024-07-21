import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import styles from '../../assets/styles/Layout.module.css';

const AppLayout: React.FC = () => {
    const location = useLocation();
    const hideNavbarPaths = [
        '/',
        '/splash',
        '/onboarding',
        '/login',
        '/survey/intro',
        '/survey/step1',
        '/survey/step2',
        '/survey/step3',
        '/survey/step4',
        '/survey/step5',
        '/survey/step6',
        '/survey/step7',
        '/survey/step8',
        '/survey/step9',
        '/survey/step10',
        '/survey/depression',
        '/survey/depression/total',
        '/survey/completion',
        '/partner',
        '/partner/connection-input',
    ];

    const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

    return (
        <div className={styles.layout}>
            <main className={styles.content}>
                <Outlet />
            </main>
            {!shouldHideNavbar && <Navbar />}
        </div>
    );
};

export default AppLayout;
