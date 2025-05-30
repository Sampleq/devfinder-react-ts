import type { GitHubUser } from '../../types';
import { UserTitle } from '../UserTitle';
import styles from './Card.module.scss';
import { UserStats } from '../UserStats';
import { UserInfo } from '../UserInfo';

interface CardProps {
  user: GitHubUser | null;
  isError: boolean;
}

export const Card = ({ user, isError }: CardProps) => {
  if (isError || !user) {
    return <p>No user found</p>;
  }

  // console.log('Card', user);

  return (
    <>
      <div className={styles.card}>
        <img src={user.avatar_url} alt={user.login} />
        <UserTitle
          login={user.login}
          name={user.name}
          created_at={user.created_at}
        />
        <p className={styles.bio}>{user.bio ? user.bio : 'No user bio...'}</p>
        <UserStats
          public_repos={user.public_repos}
          followers={user.followers}
          following={user.following}
        />
        <UserInfo
          company={user.company}
          blog={user.blog}
          location={user.location}
          twitter_username={user.twitter_username}
        />
      </div>
    </>
  );
};
