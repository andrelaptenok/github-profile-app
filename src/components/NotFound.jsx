import React from 'react';
import notFoundIcon from '../assets/img/notFound-icon.svg';

export const NotFound = () => {

  return (
    <div className='container'>
      <img width='64' height='64' src={notFoundIcon} alt="not found icon" />
      <p className='container__text'>User not found</p>
    </div>
  );
};
