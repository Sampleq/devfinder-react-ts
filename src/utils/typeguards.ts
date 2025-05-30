import type { GitHubError, GitHubUser } from '../types';

export function isGitHubUser(
  user: GitHubUser | GitHubError
): user is GitHubUser {
  return 'id' in user;
}
