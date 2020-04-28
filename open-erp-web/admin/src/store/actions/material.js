import {
  MATERIAL_ON_SEARCH,
  MATERIAL_SEARCH_FROM_CHANGE,
  MATERIAL_OPEN_FORM_MODEL_TO_ADD,
  MATERIAL_OPEN_FROM_MODEL_TO_EDIT,
  MATERIAL_TABLE_ON_DELETE,
  MATERIAL_EDIT_FORM_ON_FINISH,
  MATERIAL_CLOSE_FORM_MODEL,
  MATERIAL_UPDATE_DELETE_ID,
  MATERIAL_GET_SELECT_DATA,
} from "../constant/material";

export const onSearch = (value) => {
  return {
    type: MATERIAL_ON_SEARCH,
    value,
  };
};

export const searchFormChange = (value) => {
  return {
    type: MATERIAL_SEARCH_FROM_CHANGE,
    value,
  };
};

/** 打开新增窗口 */
export const openAddFormModal = function () {
  return {
    type: MATERIAL_OPEN_FORM_MODEL_TO_ADD,
  };
};

/** 编辑结束 */
export const editFormFinish = (value) => {
  return {
    type: MATERIAL_EDIT_FORM_ON_FINISH,
    value,
  };
};

/** 关闭编辑窗口 */
export const closeFormModel = () => {
  return {
    type: MATERIAL_CLOSE_FORM_MODEL,
  };
};


/** 打开编辑窗口 */
export const openEditFormModal = (value) => {
  return { type: MATERIAL_OPEN_FROM_MODEL_TO_EDIT, value };
};

/** 表格删除更新一下待删除的ID */
export const updateDeleteId = (value) => {
  return { type: MATERIAL_UPDATE_DELETE_ID, value };
};

/** 表格删除 */
export const onTableDelete = (value) => {
  return { type: MATERIAL_TABLE_ON_DELETE, value };
};

/** 获取选择框的数据 */
export const getSelectData = () => {
  return { type: MATERIAL_GET_SELECT_DATA };
};