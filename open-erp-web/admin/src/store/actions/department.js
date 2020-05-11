import {
  DEPARTMENT_GET_LIST,
  DEPARTMENT_GET_BY_ID,
  DEPARTMENT_SELECTED_ID,
  DEPARTMENT_ON_LOAD_DATA,
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

export const onLoadData = (value) => {
  return {
    type: DEPARTMENT_ON_LOAD_DATA,
    value
  }
}

