import React, { useState } from 'react';

export const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const changeMode = () => {
    setDarkMode(!darkMode);
    root.classList.toggle("dark-mode");
  };

  return (
    <img
      id="slide"
      src={`../src/assets/img/darkslide-${darkMode ? 0 : 1}.png`}
      alt="slide"
      height="32px"
      onClick={changeMode}
    />
  );
};
