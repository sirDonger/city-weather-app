import * as Actions from './constants'
import { call, put, takeLatest } from 'redux-saga/effects'
import { Action } from '../types'

import request from '../api'

function* fetchWeatherDataEffect({ payload }: Action) {
  try {
    const data = yield call(request, payload)
    yield put({ type: Actions.FETCH_WEATHER_DATA_SUCCESS, payload: data })
  } catch(e) {
    yield put({ type: Actions.FETCH_WEATHER_DATA_FAILURE, payload: e })
  }
}

export default function* rootSaga() {
  yield takeLatest(Actions.FETCH_WEATHER_DATA, fetchWeatherDataEffect)
}