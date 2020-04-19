import {
  takeEvery,
  takeLatest,
  throttle,
  select,
  call,
  put,
} from "redux-saga/effects";
import api from "../../api";

export function* defSaga() {
  yield takeEvery("takeEvery", function* () {
    const user = yield select((state) => state.user);
    const res = yield call(api.user.list, {
      ...user,
    });
    // 发送 action
    yield put({ type: 'GET_USERS', ...res })
  });

  yield takeLatest("takeLatest", function* () {
    const user = yield select((state) => state.user);
    const res = yield call(api.user.list, "/users/", {
      ...user,
    });
    console.log("takeLatest", res);
  });

  yield throttle(5000, "throttle", function* () {
    const user = yield select((state) => state.user);
    const res = yield call(api.user.list, "/users/", {
      ...user,
    });
    console.log("throttle", res);
  });

  /** take 阻塞 */
  // yield take("take", function* () {
  //   const user = yield select((state) => state.user);
  //   const res = yield call(api.user.list, "/users/", {
  //     ...user,
  //   });
  //   console.log("take", res);
  // });
}
