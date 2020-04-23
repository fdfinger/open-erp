import {
  PROCESS_CATA_ON_SEARCH,
  PROCESS_CATA_SEARCH_FROM_CHANGE,
  PROCESS_CATA_OPEN_FORM_MODEL_TO_ADD,
  PROCESS_CATA_OPEN_FROM_MODEL_TO_EDIT,
  PROCESS_CATA_TABLE_ON_DELETE,
  PROCESS_CATA_EDIT_FORM_ON_FINISH,
  PROCESS_CATA_CLOSE_FORM_MODEL,
  PROCESS_CATA_UPDATE_DELETE_ID,
  PROCESS_CATA_GET_SELECT_DATA,
} from "../constant/processCata";

export const onSearch = (value) => {
  return {
    type: PROCESS_CATA_ON_SEARCH,
    value,
  };
};

export const searchFormChange = (value) => {
  return {
    type: PROCESS_CATA_SEARCH_FROM_CHANGE,
    value,
  };
};

/** 打开新增窗口 */
export const openAddFormModal = function () {
  return {
    type: PROCESS_CATA_OPEN_FORM_MODEL_TO_ADD,
  };
};

/** 编辑结束 */
export const editFormFinish = (value) => {
  return {
    type: PROCESS_CATA_EDIT_FORM_ON_FINISH,
    value,
  };
};

/** 关闭编辑窗口 */
export const closeFormModel = () => {
  return {
    type: PROCESS_CATA_CLOSE_FORM_MODEL,
  };
};


/** 打开编辑窗口 */
export const openEditFormModal = (value) => {
  return { type: PROCESS_CATA_OPEN_FROM_MODEL_TO_EDIT, value };
};

/** 表格删除更新一下待删除的ID */
export const updateDeleteId = (value) => {
  return { type: PROCESS_CATA_UPDATE_DELETE_ID, value };
};

/** 表格删除 */
export const onTableDelete = (value) => {
  return { type: PROCESS_CATA_TABLE_ON_DELETE, value };
};

/** 获取选择框的数据 */
export const getSelectData = () => {
  return { type: PROCESS_CATA_GET_SELECT_DATA };
};