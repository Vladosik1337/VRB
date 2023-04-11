import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../@vrb/constants/routes";
import { ArticlesPage } from "../@vrb/pages/ArticlesPage";
import { HomePage } from "../@vrb/pages/HomePage";

export const AppComponent = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ARTICLES} element={<ArticlesPage />} />
      </Routes>
    </>
  );
};
