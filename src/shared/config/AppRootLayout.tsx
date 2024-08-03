'use client';

import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const AppRootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);

    return () => window.removeEventListener('resize', setVh);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="min-h-[calc(var(--vh,_1vh)*100)] h-[calc(var(--vh,_1vh)*100)] flex items-center justify-center bg-gray-100">
      <div
        id="root"
        className="bg-white h-full w-full max-w-[640px] flex flex-col relative overflow-y-scroll overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};

export default AppRootLayout;
