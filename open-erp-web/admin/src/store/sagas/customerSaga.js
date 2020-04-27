import { takeEvery, select, call, put, delay } from "redux-saga/effects";
import api from "../../api";
import {
  CUSTOMER_ON_SEARCH,
  CUSTOMER_UPDATE_TABLE_DATA,
  CUSTOMER_EDIT_FORM_ON_FINISH,
  CUSTOMER_CLOSE_FORM_MODEL,
  CUSTOMER_TABLE_ON_DELETE,
  CUSTOMER_GET_SELECT_DATA,
  CUSTOMER_UPDATE_SELECT_DATA,
  // USER_OPEN_FORM_MODEL_TO_ADD,
  // USER_OPEN_FROM_MODEL_TO_EDIT,
} from "../constant/customer";

export default function* customerSaga() {
  // 查询 异步
  yield takeEvery(CUSTOMER_ON_SEARCH, function* () {
    try {
      yield delay(500);
      const { queryForm } = yield select((state) => state.customer);
      const res = yield call(api.customer.list, queryForm);
      if ("data" in res) {
        yield put({
          type: CUSTOMER_UPDATE_TABLE_DATA,
          value: res.data,
        });
      }
    } catch (error) {}
  });

  
  // 修改和编辑
  yield takeEvery(CUSTOMER_EDIT_FORM_ON_FINISH, function* () {
    try {
      const state = yield select(({ customer }) => customer);
      // 如果存在ID就是编辑
      const res = yield call(
        state.editInitValues.id ? api.customer.update : api.customer.insert,
        state.editInitValues
      );
      if (res.result || res.statusCode === 200) {
        yield put({ type: CUSTOMER_CLOSE_FORM_MODEL });
        yield put({ type: CUSTOMER_ON_SEARCH });
      }
    } catch (error) {}
  });

  // 删除
  yield takeEvery(CUSTOMER_TABLE_ON_DELETE, function* () {
    try {
      const needDeleteId = yield select((state) => state.customer.needDeleteId);
      const res = yield call(api.customer.delete, needDeleteId);
      if (res.result || res.statusCode === 200) {
        yield put({ type: CUSTOMER_CLOSE_FORM_MODEL });
        yield put({ type: CUSTOMER_ON_SEARCH });
      }
    } catch (error) {}
  });

  // 打开窗口就去 获取选择框的数据 获取的是部门的数据 所以应该是 DEPARTMENT_GET_SELECT_DATA
  // yield takeEvery([USER_OPEN_FORM_MODEL_TO_ADD, USER_OPEN_FROM_MODEL_TO_EDIT], function* (){
  //   yield put({ type: USER_GET_SELECT_DATA })
  // })

  // 获取 选择框 的 数据
  yield takeEvery(CUSTOMER_GET_SELECT_DATA, function* (){
    try {
      const res = yield call(api.customer.list)
      yield put({
        type: CUSTOMER_UPDATE_SELECT_DATA,
        value: res.data.rows || []
      })
    } catch (error) {
      
    }
  })
}
