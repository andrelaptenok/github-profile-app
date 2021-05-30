import React from 'react';
import initialSvg from '../assets/img/search-img.svg';

export const InitialHome = () => {

  return (
    <div className='container'>
      <img width='64' height='64' src={initialSvg} alt="search icon" />
      <p className='container__text'>Start with searching a GitHub user</p>
    </div>
  );
};
