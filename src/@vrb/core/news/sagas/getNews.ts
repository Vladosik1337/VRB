import { call, put, takeLatest } from 'redux-saga/effects';
import { Article } from '../../../types/Article';
import { getNews } from '../../../facade/getNews';
import { getNewsFailure, getNewsStart, getNewsSuccess } from '../reducer';

function* fetchNews({ payload }: { payload: number }) {
  try {
    yield;
    const response: Article[] = yield call(getNews, payload);
    yield put(getNewsSuccess(response));
  } catch (error: any) {
    yield put(getNewsFailure(error.message));
  }
}

export function* watchGetNews() {
  yield takeLatest(getNewsStart, fetchNews);
}
