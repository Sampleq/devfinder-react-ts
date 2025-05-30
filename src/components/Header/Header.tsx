import styles from './Header.module.scss';

import { ThemeSwitcher } from '../ThemeSwitcher';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>devfinder</h1>
      <ThemeSwitcher />
    </div>
  );
};
