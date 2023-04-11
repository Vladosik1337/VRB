import { all, fork } from 'redux-saga/effects';
import * as watchGetNews from '../news/sagas/getNews';

export function* rootSaga() {
  yield all([...Object.values(watchGetNews)].map(fork));
}
