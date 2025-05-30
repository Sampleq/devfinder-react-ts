import { useEffect, useState } from 'react';
import './App.scss';
import { UserCard } from './components/Card/UserCard';

import { Container } from './components/Container';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';

import type { GitHubError, GitHubUser } from './types';
import { isGitHubUser } from './utils/typeguards';

const URL_API = 'https://api.github.com/users';

function App() {
  // const [user, setUser] = useState<GitHubUser>(mockUser);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [isError, setIsError] = useState(false);

  const submitHadler = async (text: string) => {
    const response = await fetch(`${URL_API}/${text}`);
    const data: GitHubUser | GitHubError = await response.json();
    console.log('App', data);

    if (isGitHubUser(data)) {
      setIsError(false);
      setUser(data);
    } else {
      setIsError(true);
    }
  };

  // just using mockUser
  useEffect(() => {
    fetch(`${URL_API}/sampleq`).then(response =>
      response.json().then(data => setUser(data))
    );
  }, []);

  return (
    <>
      <Container>
        <Header />
        <SearchForm isError={isError} submitHadler={submitHadler} />

        <UserCard user={user} isError={isError} />
      </Container>
    </>
  );
}

export default App;
