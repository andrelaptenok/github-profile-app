import React from 'react';
import reposEmptyIcon from '../assets/img/reposEmpty-icon.svg';

export const ReposEmpty = () => {

  return (
    <div className='empty'>
      <img width='64' height='64' src={reposEmptyIcon} alt="repos empty" />
      <p className='empty__text'>Repository list is empty</p>
    </div>
  );
};
