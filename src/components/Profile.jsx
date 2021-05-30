import React, { useContext } from 'react';
import { GithubContext } from '../Context/github';
import { Repos } from './Repos/Repos';
import followersIcon from '../assets/img/followers-icon.svg';
import followingIcon from '../assets/img/following-icon.svg';

export const Profile = () => {
  const { user } = useContext(GithubContext);

  const { name, login, avatar_url, html_url, followers, following, public_repos } = user;

  const abbreviateNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num;
  };

  const followersNum = abbreviateNumber(followers);
  const followingNum = abbreviateNumber(following);

  return (
    <div className="main">
      <div className="profile">
        <img className='profile__photo' src={avatar_url} alt="github avatar" />
        <h2 className="profile__surname">{name}</h2>
        <a className='profile__login' href={html_url} target="blank">
          {login}
        </a>
        <div className="profile__social">
          <div className="profile__social__item">
            <img src={followersIcon} alt="followers" />
            <span>{followersNum} followers</span>
          </div>
          <div className="profile__social__item">
            <img src={followingIcon} alt="following" />
            <span>{followingNum} following</span>
          </div>
        </div>
      </div>
      <Repos className="main__repository" current_repos={public_repos} />
    </div>
  );
};
