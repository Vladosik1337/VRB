import { configureStore } from '@reduxjs/toolkit';
import { articleSlice } from '../@vrb/core/articles/reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../@vrb/core/sagas/rootSagas';
import { newsSlice } from '../@vrb/core/news/reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    articles: articleSlice.reducer,
    news: newsSlice.reducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
