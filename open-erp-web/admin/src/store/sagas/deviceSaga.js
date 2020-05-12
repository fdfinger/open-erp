import { takeEvery, select, call, put, delay } from "redux-saga/effects";
import api from "../../api";
import {
  DEVICE_ON_SEARCH,
  DEVICE_UPDATE_TABLE_DATA,
  DEVICE_EDIT_FORM_ON_FINISH,
  DEVICE_CLOSE_FORM_MODEL,
  DEVICE_TABLE_ON_DELETE,
  DEVICE_GET_SELECT_DATA,
  DEVICE_UPDATE_SELECT_DATA,
  DEVICE_OPEN_FORM_MODEL_TO_ADD,
  DEVICE_OPEN_FROM_MODEL_TO_EDIT
} from "../constant/device";

import { DEPARTMENT_GET_SELECT_DATA } from '../constant/department'

export default function* deviceSaga() {
  // 查询 异步
  yield takeEvery(DEVICE_ON_SEARCH, function* () {
    try {
      yield delay(500);
      const { queryForm } = yield select((state) => state.device);
      const res = yield call(api.device.list, queryForm);
      if ("data" in res) {
        yield put({
          type: DEVICE_UPDATE_TABLE_DATA,
          value: res.data,
        });
      }
    } catch (error) {}
  });

  
  // 修改和编辑
  yield takeEvery(DEVICE_EDIT_FORM_ON_FINISH, function* () {
    try {
      const state = yield select(({ device }) => device);
      // 如果存在ID就是编辑
      const res = yield call(
        state.editInitValues.id ? api.device.update : api.device.insert,
        state.editInitValues
      );
      if (res.result || res.statusCode === 200) {
        yield put({ type: DEVICE_CLOSE_FORM_MODEL });
        yield put({ type: DEVICE_ON_SEARCH });
      }
    } catch (error) {}
  });

  // 删除
  yield takeEvery(DEVICE_TABLE_ON_DELETE, function* () {
    try {
      const needDeleteId = yield select((state) => state.device.needDeleteId);
      const res = yield call(api.device.delete, needDeleteId);
      if (res.result || res.statusCode === 200) {
        yield put({ type: DEVICE_CLOSE_FORM_MODEL });
        yield put({ type: DEVICE_ON_SEARCH });
      }
    } catch (error) {}
  });

  // 打开窗口就去 获取选择框的数据 获取的是部门的数据
  yield takeEvery([DEVICE_OPEN_FORM_MODEL_TO_ADD, DEVICE_OPEN_FROM_MODEL_TO_EDIT], function* (){
    yield put({ type: DEPARTMENT_GET_SELECT_DATA })
  })

  // 获取 选择框 的 数据
  yield takeEvery(DEVICE_GET_SELECT_DATA, function* (){
    try {
      const res = yield call(api.device.list)
      yield put({
        type: DEVICE_UPDATE_SELECT_DATA,
        value: res.data.rows || []
      })
    } catch (error) {
      
    }
  })
}
