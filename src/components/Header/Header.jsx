import React from 'react';
import logoSvg from '../../assets/img/github-logo.svg';
import { Search } from './Search';

export const Header = () => {

  return (
    <header className="form">
      <img width="38" height='38' src={logoSvg} alt="github logo" />
      <Search />
    </header>
  );
};