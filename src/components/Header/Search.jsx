import React, { useState, useContext } from 'react';
import { GithubContext } from '../../Context/github';

export const Search = () => {
  const [value, setValue] = useState('');
  const github = useContext(GithubContext);

  const onSubmit = (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    github.getSearch(value.trim());
    setValue('');
  };

  return (
    <input
      type="text"
      className="form__input"
      placeholder="Enter Github username"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyPress={onSubmit}
    />
  );
};
