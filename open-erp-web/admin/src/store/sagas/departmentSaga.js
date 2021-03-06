import { takeEvery, select, call, put } from "redux-saga/effects";
import {
  DEPARTMENT_GET_LIST,
  DEPARTMENT_SELECTED_ID,
  DEPARTMENT_LIST_ON_CHANGE,
  DEPARTMENT_ON_LOAD_DATA,
  DEPARTMENT_UPDATE_FORM,
  DEPARTMENT_EDIT_ON_FINISH,
  DEPARTMENT_GET_SELECT_DATA,
  DEPARTMENTE_UPDATE_SELECT_DATA
} from "../constant/department";
import { getList, getDataById, insert, update } from "../../api/department";
import { message } from "antd";

function updateTreeData(list, key, children) {
  return list.map((node) => {
    if (node.key === key) {
      return { ...node, children };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children),
      };
    }
    return node;
  });
}

export default function* departmentSaga() {
  /** 获取第一级所有部门数据 */
  yield takeEvery(DEPARTMENT_GET_LIST, function* () {
    const res = yield call(getList, { level: 1 });
    if (res.data) {
      yield put({ type: DEPARTMENT_LIST_ON_CHANGE, value: res.data.rows });
    }
  });

  /** 获取选中节点的部门数据 */
  yield takeEvery(DEPARTMENT_SELECTED_ID, function* () {
    const selectedId = yield select((state) => state.department.selectedId);
    const res = yield call(getDataById, selectedId);
    if (res.data) {
      yield put({ type: DEPARTMENT_UPDATE_FORM, value: res.data });
    }
  });

  /** 懒加载子节点 */
  yield takeEvery(DEPARTMENT_ON_LOAD_DATA, function* () {
    const department = yield select((state) => state.department);
    const res = yield call(getList, { parentId: department.loadData.key });
    if (res.data && res.data.rows && res.data.rows.length > 0) {
      const data = updateTreeData(
        department.list,
        department.loadData.key,
        res.data.rows.map((item) => ({ key: item.id, title: item.name }))
      );
      yield put({
        type: DEPARTMENT_LIST_ON_CHANGE,
        value: data
      })
    }
  });

  /** 提交表单 */
  yield takeEvery(DEPARTMENT_EDIT_ON_FINISH, function* () {
    let res;
    const department = yield select((state) => state.department);
    if ('id' in department.formData) {
      res = yield call(update, department.formData)
    } else {
      res = yield call(insert, department.formData)
    }
    message.success(res.message || '操作成功')
  })

  // 获取 选择框 的 数据
  yield takeEvery(DEPARTMENT_GET_SELECT_DATA, function* (){
    try {
      const res = yield call(getList)
      yield put({
        type: DEPARTMENTE_UPDATE_SELECT_DATA,
        value: res.data.rows || []
      })
    } catch (error) {
      
    }
  })
}
