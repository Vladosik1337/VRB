import React, { FC } from 'react';
import './Article.scss';
import { useDispatch } from 'react-redux';
import { pinArticle, removeArticle } from '../../core/articles/reducer';

interface props {
  id: string;
  image: string;
  title: string;
  description: string;
  author: string;
  isPinned: boolean;
}

export const Article: FC<props> = ({
  id,
  image,
  title,
  description,
  author,
  isPinned,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="article">
      <img src={image} alt="Article" className="article__img" />
      <div className="article__body">
        <div className="article__author">{author}</div>
        <h2 className="article__title">
          {title && `${title.substring(0, 50)}...`}
        </h2>
        <p className="article__description">
          {description && `${description.substring(0, 100)}...`}
        </p>

        <div className="article__buttons">
          <button
            onClick={() => dispatch(removeArticle(id))}
            className="article__remove-btn"
          >
            Remove
          </button>
          {!isPinned && (
            <button
              onClick={() => dispatch(pinArticle(id))}
              className="article__pin-btn"
            >
              Pin
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
