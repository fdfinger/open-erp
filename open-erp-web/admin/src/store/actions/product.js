import {
  PRODUCT_ON_SEARCH,
  PRODUCT_SEARCH_FROM_CHANGE,
  PRODUCT_OPEN_FORM_MODEL_TO_ADD,
  PRODUCT_OPEN_FROM_MODEL_TO_EDIT,
  PRODUCT_TABLE_ON_DELETE,
  PRODUCT_EDIT_FORM_ON_FINISH,
  PRODUCT_CLOSE_FORM_MODEL,
  PRODUCT_UPDATE_DELETE_ID,
  PRODUCT_GET_SELECT_DATA,
} from "../constant/product";

export const onSearch = (value) => {
  return {
    type: PRODUCT_ON_SEARCH,
    value,
  };
};

export const searchFormChange = (value) => {
  return {
    type: PRODUCT_SEARCH_FROM_CHANGE,
    value,
  };
};

/** 打开新增窗口 */
export const openAddFormModal = function () {
  return {
    type: PRODUCT_OPEN_FORM_MODEL_TO_ADD,
  };
};

/** 编辑结束 */
export const editFormFinish = (value) => {
  return {
    type: PRODUCT_EDIT_FORM_ON_FINISH,
    value,
  };
};

/** 关闭编辑窗口 */
export const closeFormModel = () => {
  return {
    type: PRODUCT_CLOSE_FORM_MODEL,
  };
};


/** 打开编辑窗口 */
export const openEditFormModal = (value) => {
  return { type: PRODUCT_OPEN_FROM_MODEL_TO_EDIT, value };
};

/** 表格删除更新一下待删除的ID */
export const updateDeleteId = (value) => {
  return { type: PRODUCT_UPDATE_DELETE_ID, value };
};

/** 表格删除 */
export const onTableDelete = (value) => {
  return { type: PRODUCT_TABLE_ON_DELETE, value };
};

/** 获取选择框的数据 */
export const getSelectData = () => {
  return { type: PRODUCT_GET_SELECT_DATA };
};