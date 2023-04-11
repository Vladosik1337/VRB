import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../@vrb/constants/routes';
import { HomePage } from '../@vrb/pages/HomePage';
import { Header } from '../@vrb/components/Header';
import { NewsPage } from '../@vrb/pages/NewsPage';

export const AppComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ARTICLES} element={<NewsPage />} />
      </Routes>
    </>
  );
};
