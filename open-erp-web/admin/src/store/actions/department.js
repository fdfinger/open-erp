import {
  DEPARTMENT_GET_LIST,
  DEPARTMENT_GET_BY_ID,
  DEPARTMENT_SELECTED_ID,
  DEPARTMENT_ON_LOAD_DATA,
  DEPARTMENT_EDIT_ON_FINISH,
  DEPARTMENT_EDIT_ADD_CHILD,
} from "../constant/department";

/** 获取列表 */
export const getList = () => {
  return {
    type: DEPARTMENT_GET_LIST
  };
};

/** 获取明细 */
export const getById = (value) => {
  return {
    type: DEPARTMENT_GET_BY_ID,
    value,
  };
};

/** 更新选中的ID */
export const setSelectId = (value) => {
  return {
    type: DEPARTMENT_SELECTED_ID,
    value
  }
}

/** 懒加载数据 */
export const onLoadData = (value) => {
  return {
    type: DEPARTMENT_ON_LOAD_DATA,
    value
  }
}

/** 表单完成提交 */
export const onFinish = (value) => {
  return {
    type: DEPARTMENT_EDIT_ON_FINISH,
    value
  }
}

/** 新增下级 */
export const addChild = (value) => {
  return {
    type: DEPARTMENT_EDIT_ADD_CHILD,
    value
  }
}

