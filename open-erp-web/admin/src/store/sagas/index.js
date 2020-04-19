import { all } from 'redux-saga/effects'
import { loginSaga } from './loginSaga'
import { defSaga } from './defSaga'

export function* allSaga () {
  yield all([loginSaga(), defSaga()])
}