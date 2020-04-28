import { takeEvery, select, call, put, delay } from "redux-saga/effects";
import api from "../../api";
import {
  WAREHOUSE_ON_SEARCH,
  WAREHOUSE_UPDATE_TABLE_DATA,
  WAREHOUSE_EDIT_FORM_ON_FINISH,
  WAREHOUSE_CLOSE_FORM_MODEL,
  WAREHOUSE_TABLE_ON_DELETE,
  WAREHOUSE_GET_SELECT_DATA,
  WAREHOUSE_UPDATE_SELECT_DATA,
  // MATERIAL_OPEN_FORM_MODEL_TO_ADD,
  // MATERIAL_OPEN_FORM_MODEL_TO_EDIT
} from "../constant/warehouse";

export default function* warehouseSaga() {
  // 查询 异步
  yield takeEvery(WAREHOUSE_ON_SEARCH, function* () {
    try {
      yield delay(500);
      const { queryForm } = yield select((state) => state.warehouse);
      const res = yield call(api.warehouse.list, queryForm);
      if ("data" in res) {
        yield put({
          type: WAREHOUSE_UPDATE_TABLE_DATA,
          value: res.data,
        });
      }
    } catch (error) {}
  });

  
  // 修改和编辑
  yield takeEvery(WAREHOUSE_EDIT_FORM_ON_FINISH, function* () {
    try {
      const state = yield select(({ warehouse }) => warehouse);
      // 如果存在ID就是编辑
      const res = yield call(
        state.editInitValues.id ? api.warehouse.update : api.warehouse.insert,
        state.editInitValues
      );
      if (res.result || res.statusCode === 200) {
        yield put({ type: WAREHOUSE_CLOSE_FORM_MODEL });
        yield put({ type: WAREHOUSE_ON_SEARCH });
      }
    } catch (error) {}
  });

  // 删除
  yield takeEvery(WAREHOUSE_TABLE_ON_DELETE, function* () {
    try {
      const needDeleteId = yield select((state) => state.warehouse.needDeleteId);
      const res = yield call(api.warehouse.delete, needDeleteId);
      if (res.result || res.statusCode === 200) {
        yield put({ type: WAREHOUSE_CLOSE_FORM_MODEL });
        yield put({ type: WAREHOUSE_ON_SEARCH });
      }
    } catch (error) {}
  });

  // 打开窗口就去 获取选择框的数据 获取的是部门的数据
  // yield takeEvery([MATERIAL_OPEN_FORM_MODEL_TO_ADD, MATERIAL_OPEN_FORM_MODEL_TO_EDIT], function* (){
  //   yield put({ type: USER_GET_SELECT_DATA })
  // })

  // 获取 选择框 的 数据
  yield takeEvery(WAREHOUSE_GET_SELECT_DATA, function* (){
    try {
      const res = yield call(api.warehouse.list)
      yield put({
        type: WAREHOUSE_UPDATE_SELECT_DATA,
        value: res.data.rows || []
      })
    } catch (error) {
      
    }
  })
}
