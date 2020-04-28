import { all } from "redux-saga/effects";
import { loginSaga } from "./loginSaga";
import { defSaga } from "./defSaga";
import areaSaga from "./areaSaga";
import userSaga from "./userSaga";
import processCataSaga from "./processCataSaga";
import processSaga from "./processSaga";
import customerSaga from './customerSaga'
import materialCataSaga from './materialCataSaga'
import materialSaga from './materialSaga'

export function* allSaga() {
  yield all([
    loginSaga(),
    defSaga(),
    areaSaga(),
    userSaga(),
    processCataSaga(),
    processSaga(),
    customerSaga(),
    materialCataSaga(),
    materialSaga()
  ]);
}
