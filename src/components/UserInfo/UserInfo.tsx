import { v4 as uuidv4 } from 'uuid';

import type { GitHubUser } from '../../types';
import type { ReactNode } from 'react';
import styles from './UserInfo.module.scss';

import LocationIcon from '../../assets/icon-location.svg?react';
import CompanyIcon from '../../assets/icon-company.svg?react';
import XIcon from '../../assets/icons-x-20.svg?react';
import BlogIcon from '../../assets/icon-website.svg?react';

interface UserInfoProps
  extends Pick<
    GitHubUser,
    'location' | 'twitter_username' | 'company' | 'blog'
  > {}

interface Info {
  icon: ReactNode;
  text: string | null;
  isLink?: boolean;
}

export const UserInfo = ({
  location,
  twitter_username,
  company,
  blog,
}: UserInfoProps) => {
  const infos: Info[] = [
    { icon: <LocationIcon />, text: location },
    { icon: <XIcon />, text: twitter_username },
    { icon: <BlogIcon />, text: blog, isLink: true },
    { icon: <CompanyIcon />, text: company },
  ];

  return (
    <div className={styles.userInfo}>
      {infos.map(info => {
        return (
          <div key={uuidv4()}>
            {info.icon}
            <span>
              {info.text ? (
                info.isLink ? (
                  <a
                    href={
                      info.text.startsWith('http')
                        ? info.text
                        : `https://${info.text}`
                    }
                  >
                    {info.text}
                  </a>
                ) : (
                  info.text
                )
              ) : (
                'No data...'
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
};
