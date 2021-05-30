import React from 'react';
import { GithubState } from './Context/github/githubState';
import { Header, Home } from './components';

function App() {

  return (
    <GithubState>
      <div className="wrapper">
        <Header />
        <main className="content"><Home /></main>
      </div>
    </GithubState>
  );
}

export default App;
