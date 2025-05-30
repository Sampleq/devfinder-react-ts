import styles from './ThemeSwitcher.module.scss';

import SunIcon from '../../assets/icon-sun.svg?react';
import MoonIcon from '../../assets/icon-moon.svg?react';

import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className={styles.themeSwitcher} onClick={() => setIsDark(!isDark)}>
      <span>{isDark ? 'Light' : 'Dark'}</span>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </div>
  );
};
