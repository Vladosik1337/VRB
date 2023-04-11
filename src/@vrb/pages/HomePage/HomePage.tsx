import React from 'react';
import { Article } from '../../components/Article';
import './HomePage.scss';
import ArticleForm from '../../components/ArticleForm/ArticleForm';
import { useHomePage } from './useHomePage';

export const HomePage = () => {
  const { searchTerm, articles, setSearchTerm } = useHomePage();

  return (
    <main className="main">
      <ArticleForm />
      <div className="home-page-container">
        <input
          type="text"
          placeholder="Search"
          className="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="articles">
          {articles.map((article) => (
            <Article
              key={article.id}
              id={article.id}
              image={article.image}
              title={article.title}
              description={article.description}
              author={article.author}
              isPinned={article.pinned}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
