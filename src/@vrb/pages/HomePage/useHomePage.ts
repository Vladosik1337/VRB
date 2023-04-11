import { RootState } from '../../../app/store';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Article } from '../../types/Article';

type HomePageState = {
  searchTerm: string;
  articles: Article[];
  setSearchTerm: (searchTerm: string) => void;
};

export const useHomePage = (): HomePageState => {
  const [searchTerm, setSearchTerm] = useState('');
  const articles = useSelector((state: RootState) =>
    state.articles.articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return { searchTerm, setSearchTerm, articles };
};
