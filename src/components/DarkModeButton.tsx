import React, { useState, useEffect } from 'react';

const ThemeToggleButton = () => {
  const [isDarkmode, setIsDarkmode] = useState(false);
  

  useEffect(() => {
    const storedTheme = localStorage.getItem('isDarkmode');
    if (storedTheme !== null) {
      setIsDarkmode(JSON.parse(storedTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isDarkmode', isDarkmode.toString());
    const htmlElement = document.documentElement;
    if (isDarkmode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkmode]);

  const toggleTheme = () => {
    setIsDarkmode(prevMode => !prevMode);
  };

  const darkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );

  const lightIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );

  return (
    <button 
      className={`w-20 h-10 rounded-full bg-white dark:bg-gray-400 flex items-center transition duration-300 focus:outline-none shadow`}
      onClick={toggleTheme}
    >
      <div
        className={`w-12 h-12 relative rounded-full transition duration-500 transform ${isDarkmode ? 'bg-gray-700 translate-x-full text-white' : 'bg-gray-50 -translate-x-2 text-blue-700'} p-1`}
      >
        {isDarkmode ? darkIcon : lightIcon}
      </div>
    </button>
  );
};

export default ThemeToggleButton;