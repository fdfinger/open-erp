import {
  USER_ON_SEARCH,
  USER_SEARCH_FROM_CHANGE,
  USER_OPEN_FORM_MODEL_TO_ADD,
  USER_OPEN_FROM_MODEL_TO_EDIT,
  USER_TABLE_ON_DELETE,
  USER_EDIT_FORM_ON_FINISH,
  USER_CLOSE_FORM_MODEL,
  USER_UPDATE_DELETE_ID,
  USER_GET_SELECT_DATA,
} from "../constant/user";

export const onSearch = (value) => {
  return {
    type: USER_ON_SEARCH,
    value,
  };
};

export const searchFormChange = (value) => {
  return {
    type: USER_SEARCH_FROM_CHANGE,
    value,
  };
};

/** 打开新增窗口 */
export const openAddFormModal = function () {
  return {
    type: USER_OPEN_FORM_MODEL_TO_ADD,
  };
};

/** 编辑结束 */
export const editFormFinish = (value) => {
  return {
    type: USER_EDIT_FORM_ON_FINISH,
    value,
  };
};

/** 关闭编辑窗口 */
export const closeFormModel = () => {
  return {
    type: USER_CLOSE_FORM_MODEL,
  };
};


/** 打开编辑窗口 */
export const openEditFormModal = (value) => {
  return { type: USER_OPEN_FROM_MODEL_TO_EDIT, value };
};

/** 表格删除更新一下待删除的ID */
export const updateDeleteId = (value) => {
  return { type: USER_UPDATE_DELETE_ID, value };
};

/** 表格删除 */
export const onTableDelete = (value) => {
  return { type: USER_TABLE_ON_DELETE, value };
};

/** 获取选择框的数据 */
export const getSelectData = () => {
  return { type: USER_GET_SELECT_DATA };
};