import {
  DEVICE_ON_SEARCH,
  DEVICE_SEARCH_FROM_CHANGE,
  DEVICE_OPEN_FORM_MODEL_TO_ADD,
  DEVICE_OPEN_FROM_MODEL_TO_EDIT,
  DEVICE_TABLE_ON_DELETE,
  DEVICE_EDIT_FORM_ON_FINISH,
  DEVICE_CLOSE_FORM_MODEL,
  DEVICE_UPDATE_DELETE_ID,
  DEVICE_GET_SELECT_DATA,
} from "../constant/device";

export const onSearch = (value) => {
  return {
    type: DEVICE_ON_SEARCH,
    value,
  };
};

export const searchFormChange = (value) => {
  return {
    type: DEVICE_SEARCH_FROM_CHANGE,
    value,
  };
};

/** 打开新增窗口 */
export const openAddFormModal = function () {
  return {
    type: DEVICE_OPEN_FORM_MODEL_TO_ADD,
  };
};

/** 编辑结束 */
export const editFormFinish = (value) => {
  return {
    type: DEVICE_EDIT_FORM_ON_FINISH,
    value,
  };
};

/** 关闭编辑窗口 */
export const closeFormModel = () => {
  return {
    type: DEVICE_CLOSE_FORM_MODEL,
  };
};


/** 打开编辑窗口 */
export const openEditFormModal = (value) => {
  return { type: DEVICE_OPEN_FROM_MODEL_TO_EDIT, value };
};

/** 表格删除更新一下待删除的ID */
export const updateDeleteId = (value) => {
  return { type: DEVICE_UPDATE_DELETE_ID, value };
};

/** 表格删除 */
export const onTableDelete = (value) => {
  return { type: DEVICE_TABLE_ON_DELETE, value };
};

/** 获取选择框的数据 */
export const getSelectData = () => {
  return { type: DEVICE_GET_SELECT_DATA };
};