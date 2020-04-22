import { all } from "redux-saga/effects";
import { loginSaga } from "./loginSaga";
import { defSaga } from "./defSaga";
import areaSaga from "./areaSaga";
import userSaga from "./userSaga";

export function* allSaga() {
  yield all([loginSaga(), defSaga(), areaSaga(), userSaga()]);
}
