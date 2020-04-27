import {
  MATERIALCATA_ON_SEARCH,
  MATERIALCATA_SEARCH_FROM_CHANGE,
  MATERIALCATA_OPEN_FORM_MODEL_TO_ADD,
  MATERIALCATA_OPEN_FROM_MODEL_TO_EDIT,
  MATERIALCATA_TABLE_ON_DELETE,
  MATERIALCATA_EDIT_FORM_ON_FINISH,
  MATERIALCATA_CLOSE_FORM_MODEL,
  MATERIALCATA_UPDATE_DELETE_ID,
  MATERIALCATA_GET_SELECT_DATA,
} from "../constant/materialCata";

export const onSearch = (value) => {
  return {
    type: MATERIALCATA_ON_SEARCH,
    value,
  };
};

export const searchFormChange = (value) => {
  return {
    type: MATERIALCATA_SEARCH_FROM_CHANGE,
    value,
  };
};

/** 打开新增窗口 */
export const openAddFormModal = function () {
  return {
    type: MATERIALCATA_OPEN_FORM_MODEL_TO_ADD,
  };
};

/** 编辑结束 */
export const editFormFinish = (value) => {
  return {
    type: MATERIALCATA_EDIT_FORM_ON_FINISH,
    value,
  };
};

/** 关闭编辑窗口 */
export const closeFormModel = () => {
  return {
    type: MATERIALCATA_CLOSE_FORM_MODEL,
  };
};


/** 打开编辑窗口 */
export const openEditFormModal = (value) => {
  return { type: MATERIALCATA_OPEN_FROM_MODEL_TO_EDIT, value };
};

/** 表格删除更新一下待删除的ID */
export const updateDeleteId = (value) => {
  return { type: MATERIALCATA_UPDATE_DELETE_ID, value };
};

/** 表格删除 */
export const onTableDelete = (value) => {
  return { type: MATERIALCATA_TABLE_ON_DELETE, value };
};

/** 获取选择框的数据 */
export const getSelectData = () => {
  return { type: MATERIALCATA_GET_SELECT_DATA };
};