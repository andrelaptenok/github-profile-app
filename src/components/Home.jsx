import React, { useContext } from 'react';
import { GithubContext } from '../Context/github/index';
import { InitialHome, Profile, Loader, NotFound } from './index';

export const Home = () => {
  const { isLoaded, isSearch, error } = useContext(GithubContext);

  if (isLoaded) {
    return <Loader />;
  }

  if (error) {
    return <NotFound />;
  }

  return <>{isSearch ? <Profile /> : <InitialHome />}</>;
};
