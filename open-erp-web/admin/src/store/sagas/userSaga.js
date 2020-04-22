import { takeEvery, select, call, put, delay } from "redux-saga/effects";
import api from "../../api";
import {
  USER_ON_SEARCH,
  USER_UPDATE_TABLE_DATA,
  USER_EDIT_FORM_ON_FINISH,
  USER_CLOSE_FORM_MODEL,
  USER_TABLE_ON_DELETE,
  USER_GET_SELECT_DATA,
  USER_UPDATE_SELECT_DATA,
  // USER_OPEN_FORM_MODEL_TO_ADD,
  // USER_OPEN_FROM_MODEL_TO_EDIT,
} from "../constant/user";

export default function* userSaga() {
  // 查询 异步
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

  
  // 修改和编辑
  yield takeEvery(USER_EDIT_FORM_ON_FINISH, function* () {
    try {
      const state = yield select(({ user }) => user);
      // 如果存在ID就是编辑
      const res = yield call(
        state.editInitValues.id ? api.user.update : api.user.insert,
        state.editInitValues
      );
      if (res.result || res.statusCode === 200) {
        yield put({ type: USER_CLOSE_FORM_MODEL });
        yield put({ type: USER_ON_SEARCH });
      }
    } catch (error) {}
  });

  // 删除
  yield takeEvery(USER_TABLE_ON_DELETE, function* () {
    try {
      const needDeleteId = yield select((state) => state.user.needDeleteId);
      const res = yield call(api.user.delete, needDeleteId);
      if (res.result || res.statusCode === 200) {
        yield put({ type: USER_CLOSE_FORM_MODEL });
        yield put({ type: USER_ON_SEARCH });
      }
    } catch (error) {}
  });

  // 打开窗口就去 获取选择框的数据 获取的是部门的数据 所以应该是 DEPARTMENT_GET_SELECT_DATA
  // yield takeEvery([USER_OPEN_FORM_MODEL_TO_ADD, USER_OPEN_FROM_MODEL_TO_EDIT], function* (){
  //   yield put({ type: USER_GET_SELECT_DATA })
  // })

  // 获取 选择框 的 数据
  yield takeEvery(USER_GET_SELECT_DATA, function* (){
    try {
      const res = yield call(api.user.list)
      yield put({
        type: USER_UPDATE_SELECT_DATA,
        value: res.data.rows || []
      })
    } catch (error) {
      
    }
  })
}
