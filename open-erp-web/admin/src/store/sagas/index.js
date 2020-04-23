import { all } from "redux-saga/effects";
import { loginSaga } from "./loginSaga";
import { defSaga } from "./defSaga";
import areaSaga from "./areaSaga";
import userSaga from "./userSaga";
import processCataSaga from './processCataSaga'

export function* allSaga() {
  yield all([loginSaga(), defSaga(), areaSaga(), userSaga(), processCataSaga()]);
}
