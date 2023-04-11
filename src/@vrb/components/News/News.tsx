import React, { FC } from 'react';
import './News.scss';

interface props {
  image: string;
  title: string;
  description: string;
  author: string;
}

export const News: FC<props> = ({ image, title, description, author }) => {
  return (
    <div className="new">
      <img src={image} alt="New" className="new__img" />
      <div className="new__body">
        <div className="new__author">{author}</div>
        <h2 className="new__title">
          {title && `${title.substring(0, 50)}...`}
        </h2>
        <p className="new__description">
          {description && `${description.substring(0, 100)}...`}
        </p>
      </div>
    </div>
  );
};
