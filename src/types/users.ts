export type GitHubUser = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: null | string;
  blog: string;
  location: null | string;
  bio: null | string;
  twitter_username: null | string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;

  [key: string]: any;
};

export type GitHubError = {
  message: string;
  documentation_url: string;
  status: string;
};
