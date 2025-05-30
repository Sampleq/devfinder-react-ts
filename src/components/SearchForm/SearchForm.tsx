import { useEffect, useState } from 'react';
import styles from './SearchForm.module.scss';

import SearchIcon from '../../assets/icon-search.svg?react';

import { Button } from '../UI/Button';

interface SearchFormProps {
  isError: boolean;
  submitHadler: (text: string) => void;
}

export const SearchForm = ({ isError, submitHadler }: SearchFormProps) => {
  const [placeholder, setPlaceholder] = useState('');
  useEffect(() => {
    function updatePlaceholder() {
      setPlaceholder(
        window.innerWidth < 480 ? 'Search user...' : 'Search GitHub user...'
      );
    }

    window.addEventListener('resize', updatePlaceholder);
    updatePlaceholder(); // Инициализация

    return () => window.removeEventListener('resize', updatePlaceholder);
  }, []);

  const [inputText, setInputText] = useState('');

  return (
    <form
      className={styles.searchForm}
      onSubmit={e => {
        e.preventDefault();

        if (inputText.trim()) {
          // submitHadler(e.currentTarget.searchInput.value); // OK
          submitHadler(inputText); // OK
          setInputText('');
        }
      }}
    >
      <label htmlFor='searchInput'>
        <SearchIcon />
      </label>
      <input
        type='text'
        name='searchInput'
        id='searchInput'
        placeholder={placeholder}
        value={inputText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputText(e.target.value)
        }
      />

      <Button type='submit'>
        Search <span>user</span>
      </Button>

      {isError ? <span className={styles.error}>No result</span> : ''}
    </form>
  );
};
