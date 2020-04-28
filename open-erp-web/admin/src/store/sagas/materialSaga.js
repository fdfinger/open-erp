import { takeEvery, select, call, put, delay } from "redux-saga/effects";
import api from "../../api";
import {
  MATERIAL_ON_SEARCH,
  MATERIAL_UPDATE_TABLE_DATA,
  MATERIAL_EDIT_FORM_ON_FINISH,
  MATERIAL_CLOSE_FORM_MODEL,
  MATERIAL_TABLE_ON_DELETE,
  MATERIAL_GET_SELECT_DATA,
  MATERIAL_UPDATE_SELECT_DATA,
  MATERIAL_OPEN_FORM_MODEL_TO_ADD,
  MATERIAL_OPEN_FROM_MODEL_TO_EDIT
} from "../constant/material";

import { MATERIALCATA_GET_SELECT_DATA } from '../constant/materialCata'
import { WAREHOUSE_GET_SELECT_DATA } from '../constant/warehouse'

export default function* materialSaga() {
  // 查询 异步
  yield takeEvery(MATERIAL_ON_SEARCH, function* () {
    try {
      yield delay(500);
      const { queryForm } = yield select((state) => state.material);
      const res = yield call(api.material.list, queryForm);
      if ("data" in res) {
        yield put({
          type: MATERIAL_UPDATE_TABLE_DATA,
          value: res.data,
        });
      }
      yield put({ type: MATERIALCATA_GET_SELECT_DATA })
    } catch (error) {}
  });

  
  // 修改和编辑
  yield takeEvery(MATERIAL_EDIT_FORM_ON_FINISH, function* () {
    try {
      const state = yield select(({ material }) => material);
      // 如果存在ID就是编辑
      const res = yield call(
        state.editInitValues.id ? api.material.update : api.material.insert,
        state.editInitValues
      );
      if (res.result || res.statusCode === 200) {
        yield put({ type: MATERIAL_CLOSE_FORM_MODEL });
        yield put({ type: MATERIAL_ON_SEARCH });
      }
    } catch (error) {}
  });

  // 删除
  yield takeEvery(MATERIAL_TABLE_ON_DELETE, function* () {
    try {
      const needDeleteId = yield select((state) => state.material.needDeleteId);
      const res = yield call(api.material.delete, needDeleteId);
      if (res.result || res.statusCode === 200) {
        yield put({ type: MATERIAL_CLOSE_FORM_MODEL });
        yield put({ type: MATERIAL_ON_SEARCH });
      }
    } catch (error) {}
  });

  // 打开窗口就去 获取选择框的数据 获取的是部门的数据
  yield takeEvery([MATERIAL_OPEN_FORM_MODEL_TO_ADD, MATERIAL_OPEN_FROM_MODEL_TO_EDIT], function* (){
    yield put({ type: WAREHOUSE_GET_SELECT_DATA })
  })

  // 获取 选择框 的 数据
  yield takeEvery(MATERIAL_GET_SELECT_DATA, function* (){
    try {
      const res = yield call(api.material.list)
      yield put({
        type: MATERIAL_UPDATE_SELECT_DATA,
        value: res.data.rows || []
      })
    } catch (error) {
      
    }
  })
}
