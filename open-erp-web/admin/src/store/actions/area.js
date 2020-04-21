import {
  AREA_SEARCH_CLICK,
  AREA_SEARCH_FROM_CHANGE,
  AREA_OPEN_FORM_MODEL_TO_ADD,
  AREA_OPEN_FROM_MODEL_TO_EDIT,
  AREA_TABLE_ON_DELETE,
  AREA_EDIT_FORM_ON_FINISH,
  AREA_CLOSE_FORM_MODEL,
  AREA_UPDATE_DELETE_ID,
  AREA_GET_SELECT_DATA,
} from "../constant/area";

/** 打开新增窗口 */
export const openAddFormModal = function () {
  return {
    type: AREA_OPEN_FORM_MODEL_TO_ADD,
  };
};

/** 编辑结束 */
export const EditFormFinish = (value) => {
  return {
    type: AREA_EDIT_FORM_ON_FINISH,
    value,
  };
};

/** 关闭编辑窗口 */
export const closeFormModel = () => {
  return {
    type: AREA_CLOSE_FORM_MODEL,
  };
};

/** 查询的值发生了变化 */
export const onSearchChange = (value) => {
  return { type: AREA_SEARCH_FROM_CHANGE, value };
};

/** 查询点击 */
export const handleSearch = (value) => {
  return { type: AREA_SEARCH_CLICK, value };
};

/** 打开编辑窗口 */
export const openEditFormModal = (value) => {
  return { type: AREA_OPEN_FROM_MODEL_TO_EDIT, value };
};

/** 表格删除更新一下待删除的ID */
export const updateDeleteId = (value) => {
  return { type: AREA_UPDATE_DELETE_ID, value };
};

/** 表格删除 */
export const onTableDelete = (value) => {
  return { type: AREA_TABLE_ON_DELETE, value };
};

/** 获取选择框的数据 */
export const getSelectData = () => {
  return { type: AREA_GET_SELECT_DATA };
};
