import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import './Header.scss';

export const Header = () => {
  return (
    <div className="header">
      <Link to={ROUTES.HOME} className="header__link">
        HOME
      </Link>
      <Link to={ROUTES.ARTICLES} className="header__link">
        ARTICLES
      </Link>
    </div>
  );
};
