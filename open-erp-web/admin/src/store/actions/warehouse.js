import {
  WAREHOUSE_ON_SEARCH,
  WAREHOUSE_SEARCH_FROM_CHANGE,
  WAREHOUSE_OPEN_FORM_MODEL_TO_ADD,
  WAREHOUSE_OPEN_FROM_MODEL_TO_EDIT,
  WAREHOUSE_TABLE_ON_DELETE,
  WAREHOUSE_EDIT_FORM_ON_FINISH,
  WAREHOUSE_CLOSE_FORM_MODEL,
  WAREHOUSE_UPDATE_DELETE_ID,
  WAREHOUSE_GET_SELECT_DATA,
} from "../constant/warehouse";

export const onSearch = (value) => {
  return {
    type: WAREHOUSE_ON_SEARCH,
    value,
  };
};

export const searchFormChange = (value) => {
  return {
    type: WAREHOUSE_SEARCH_FROM_CHANGE,
    value,
  };
};

/** 打开新增窗口 */
export const openAddFormModal = function () {
  return {
    type: WAREHOUSE_OPEN_FORM_MODEL_TO_ADD,
  };
};

/** 编辑结束 */
export const editFormFinish = (value) => {
  return {
    type: WAREHOUSE_EDIT_FORM_ON_FINISH,
    value,
  };
};

/** 关闭编辑窗口 */
export const closeFormModel = () => {
  return {
    type: WAREHOUSE_CLOSE_FORM_MODEL,
  };
};


/** 打开编辑窗口 */
export const openEditFormModal = (value) => {
  return { type: WAREHOUSE_OPEN_FROM_MODEL_TO_EDIT, value };
};

/** 表格删除更新一下待删除的ID */
export const updateDeleteId = (value) => {
  return { type: WAREHOUSE_UPDATE_DELETE_ID, value };
};

/** 表格删除 */
export const onTableDelete = (value) => {
  return { type: WAREHOUSE_TABLE_ON_DELETE, value };
};

/** 获取选择框的数据 */
export const getSelectData = () => {
  return { type: WAREHOUSE_GET_SELECT_DATA };
};