import { RootState } from './../../../app/store';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNewsStart } from '../../core/news/reducer';
import { Article } from '../../types/Article';

type NewsPageState = {
  searchTerm: string;
  isLoading: boolean;
  error: string | null;
  news: Article[];
  handleLoadMore: () => void;
  setSearchTerm: (searchTerm: string) => void;
};

export const useNewsPage = (): NewsPageState => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const news = useSelector((state: RootState) =>
    state.news.news.filter(
      (oneNew) =>
        (oneNew.title &&
          oneNew.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (oneNew.description &&
          oneNew.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  );
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.news.loading);
  const error = useSelector((state: RootState) => state.news.error);

  useEffect(() => {
    dispatch(getNewsStart(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return { searchTerm, setSearchTerm, isLoading, error, news, handleLoadMore };
};
