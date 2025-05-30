import type { GitHubUser } from '../../../types';
import styles from './UserTitle.module.scss';

interface UserTitleProps
  extends Pick<GitHubUser, 'name' | 'login' | 'created_at'> {}

const localDate = Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

export const UserTitle = (props: UserTitleProps) => {
  const createdDate = localDate.format(new Date(props.created_at));

  return (
    <div className={styles.userTitle}>
      <h2>{props.name}</h2>
      <h3>{props.login}</h3>
      <span>Joined at {createdDate}</span>
    </div>
  );
};
