import {
  CUSTOMER_ON_SEARCH,
  CUSTOMER_SEARCH_FROM_CHANGE,
  CUSTOMER_OPEN_FORM_MODEL_TO_ADD,
  CUSTOMER_OPEN_FROM_MODEL_TO_EDIT,
  CUSTOMER_TABLE_ON_DELETE,
  CUSTOMER_EDIT_FORM_ON_FINISH,
  CUSTOMER_CLOSE_FORM_MODEL,
  CUSTOMER_UPDATE_DELETE_ID,
  CUSTOMER_GET_SELECT_DATA,
} from "../constant/customer";

export const onSearch = (value) => {
  return {
    type: CUSTOMER_ON_SEARCH,
    value,
  };
};

export const searchFormChange = (value) => {
  return {
    type: CUSTOMER_SEARCH_FROM_CHANGE,
    value,
  };
};

/** 打开新增窗口 */
export const openAddFormModal = function () {
  return {
    type: CUSTOMER_OPEN_FORM_MODEL_TO_ADD,
  };
};

/** 编辑结束 */
export const editFormFinish = (value) => {
  return {
    type: CUSTOMER_EDIT_FORM_ON_FINISH,
    value,
  };
};

/** 关闭编辑窗口 */
export const closeFormModel = () => {
  return {
    type: CUSTOMER_CLOSE_FORM_MODEL,
  };
};


/** 打开编辑窗口 */
export const openEditFormModal = (value) => {
  return { type: CUSTOMER_OPEN_FROM_MODEL_TO_EDIT, value };
};

/** 表格删除更新一下待删除的ID */
export const updateDeleteId = (value) => {
  return { type: CUSTOMER_UPDATE_DELETE_ID, value };
};

/** 表格删除 */
export const onTableDelete = (value) => {
  return { type: CUSTOMER_TABLE_ON_DELETE, value };
};

/** 获取选择框的数据 */
export const getSelectData = () => {
  return { type: CUSTOMER_GET_SELECT_DATA };
};