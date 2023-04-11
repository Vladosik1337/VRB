import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../../types/Article';

interface NewsState {
  news: Article[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getNewsStart(state, action: PayloadAction<number>) {
      state.loading = true;
      state.error = null;
    },
    getNewsSuccess(state, action: PayloadAction<Article[]>) {
      state.loading = false;
      state.news = [...state.news, ...action.payload];
    },
    getNewsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getNewsStart, getNewsSuccess, getNewsFailure } =
  newsSlice.actions;
