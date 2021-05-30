import React from 'react';

export const Card = ({ url, name,description }) => {
  return (
    <li className="repository__card-item">
      <a href={url} target="blank" rel='noopener noreferrer'>
        {name}
      </a>
      <p>{description}</p>
    </li>
  );
};
