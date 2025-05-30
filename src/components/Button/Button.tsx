import type { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: string | ReactNode;
  [key: string]: any;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
