'use client';

import React, { useLayoutEffect } from 'react';

const AppRootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {

  useLayoutEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);

    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <div className="min-h-[calc(var(--vh,_1vh)*100)] flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 w-full min-h-[calc(var(--vh,_1vh)*100)] max-w-lg">
        {children}
      </div>
    </div>
  );
};

export default AppRootLayout;
