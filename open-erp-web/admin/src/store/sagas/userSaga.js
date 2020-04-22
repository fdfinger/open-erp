import { takeEvery, select, call, put, delay } from "redux-saga/effects";
import api from "../../api";
import { USER_ON_SEARCH, USER_UPDATE_TABLE_DATA } from "../constant/user";

export default function* userSaga() {
  yield takeEvery(USER_ON_SEARCH, function* () {
    try {
      yield delay(500);
      const { queryForm } = yield select((state) => state.user);
      const res = yield call(api.user.list, queryForm);
      if ("data" in res) {
        yield put({
          type: USER_UPDATE_TABLE_DATA,
          value: res.data,
        });
      }
    } catch (error) {}
  });
}
