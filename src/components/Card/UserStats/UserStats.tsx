import type { GitHubUser } from '../../../types';
import styles from './UserStats.module.scss';

interface UserStatsProps
  extends Pick<GitHubUser, 'public_repos' | 'followers' | 'following'> {}

export const UserStats = ({
  public_repos,
  followers,
  following,
}: UserStatsProps) => {
  return (
    <div className={styles.userStats}>
      <div>
        <h4>Repos</h4>
        <span>{public_repos}</span>
      </div>
      <div>
        <h4>Following</h4>
        <span>{following}</span>
      </div>
      <div>
        <h4>Followers</h4>
        <span>{followers}</span>
      </div>
    </div>
  );
};
