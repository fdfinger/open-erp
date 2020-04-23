import { takeEvery, select, call, put } from "redux-saga/effects";
import api from "../../api";
import {
  AREA_SEARCH_CLICK,
  AREA_UPDATE_TABLE,
  AREA_EDIT_FORM_ON_FINISH,
  AREA_CLOSE_FORM_MODEL,
  AREA_TABLE_ON_DELETE,
  AREA_GET_SELECT_DATA,
  AREA_UPDATE_SELECT_DATA,
  AREA_OPEN_FORM_MODEL_TO_ADD,
  AREA_OPEN_FROM_MODEL_TO_EDIT
} from "../constant/area";

export default function* areaSaga() {
  // 查询 异步
  yield takeEvery(AREA_SEARCH_CLICK, function* () {
    try {
      const state = yield select(({ area }) => area);
      const res = yield call(api.area.list, state.searchForm);
      if (res.data) {
        yield put({
          type: AREA_UPDATE_TABLE,
          value: res.data,
        });
      } else {
      }
    } catch (error) {}
  });

  // 修改和编辑
  yield takeEvery(AREA_EDIT_FORM_ON_FINISH, function* () {
    try {
      const state = yield select(({ area }) => area);
      // 如果存在ID就是编辑
      const res = yield call(
        state.editInitValues.id ? api.area.update : api.area.insert,
        state.editInitValues
      );
      if (res.result || res.statusCode === 200) {
        yield put({ type: AREA_CLOSE_FORM_MODEL });
        yield put({ type: AREA_SEARCH_CLICK });
      }
    } catch (error) {}
  });

  // 删除
  yield takeEvery(AREA_TABLE_ON_DELETE, function* () {
    try {
      const needDeleteId = yield select((state) => state.area.needDeleteId);
      const res = yield call(api.area.delete, needDeleteId);
      if (res.result || res.statusCode === 200) {
        yield put({ type: AREA_CLOSE_FORM_MODEL });
        yield put({ type: AREA_SEARCH_CLICK });
      }
    } catch (error) {}
  });

  // 打开窗口就去 获取选择框的数据
  yield takeEvery([AREA_OPEN_FORM_MODEL_TO_ADD, AREA_OPEN_FROM_MODEL_TO_EDIT], function* (){
    yield put({ type: AREA_GET_SELECT_DATA })
  })

  // 获取 选择框 的 数据
  yield takeEvery(AREA_GET_SELECT_DATA, function* (){
    try {
      const res = yield call(api.area.list)
      yield put({
        type: AREA_UPDATE_SELECT_DATA,
        value: res.data.rows || []
      })
    } catch (error) {
      
    }
  })
}
