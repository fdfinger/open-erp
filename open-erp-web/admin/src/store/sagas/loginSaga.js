import { throttle,  select, call, put } from "redux-saga/effects";
import { push } from "react-router-redux";
import api from "../../api";
import { LOGIN_SUBMIT, LOGIN_SUCCESS, LOGIN_ERROR } from "../constant/login";

export function* loginSaga() {
  yield throttle(3000, LOGIN_SUBMIT, function* () {
    try {
      const state = yield select((state) => state.login);
      const res = yield call(api.login.login, state);
      if (res.data) {
        yield put({
          type: LOGIN_SUCCESS,
          value: res,
        });
        yield put(push("/dashboard"));
      } else {
        yield put({
          type: LOGIN_ERROR,
          value: res,
        });
      }
    } catch (error) {}
  });
}
