import React, { useState, useContext } from 'react';
import { ReposEmpty } from '../ReposEmpty';
import { Loader } from '../Loader';
import { GithubContext } from '../../Context/github';

import { Paginate } from './Paginate';
import { Card } from './Card';

export const Repos = ({ current_repos }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [counter, setCounter] = useState(false);
  const perPage = 4;

  const { repos, isLoadedPage } = useContext(GithubContext);
  const github = useContext(GithubContext);

  const pagesCount = Math.ceil(current_repos / perPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    github.getPageRepos(selected + 1);
    setCounter(getCount(selected));
  };

  const getCount = (page) => {
    const currentPage = page + 1;
    let lastIndex = 0;
    if (currentPage * perPage > current_repos) {
      lastIndex = currentPage * perPage - repos.length;
      setCounter(lastIndex);
      return true;
    }
  };

  return (
    <div className="repository">
      {current_repos === 0 ? (
        <ReposEmpty />
      ) : (
        <>
          <h3 className="repository__header">Repositories ({current_repos})</h3>
          {isLoadedPage ? (
            <Loader />
          ) : (
            <ul className='repository__card'>
              {repos.map((repo) => (
                <Card
                  key={repo.id}
                  url={repo.html_url}
                  name={repo.name}
                  description={repo.description}
                />
              ))}
            </ul>
          )}
          <div className="repository__paginate">
            <span>
              {pageNumber * perPage + 1}-{counter ? current_repos : (pageNumber + 1) * perPage} of{' '}
              {current_repos}
            </span>
            <Paginate pagesCount={pagesCount} changePage={changePage} />
          </div>
        </>
      )}
    </div>
  );
};
