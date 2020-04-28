import {
  MATERIAL_ON_SEARCH,
  MATERIAL_SEARCH_FROM_CHANGE,
  MATERIAL_UPDATE_TABLE_DATA,
  MATERIAL_OPEN_FORM_MODEL_TO_ADD,
  MATERIAL_OPEN_FROM_MODEL_TO_EDIT,
  MATERIAL_TABLE_ON_DELETE,
  MATERIAL_EDIT_FORM_ON_FINISH,
  MATERIAL_EDIT_FORM_ON_SUCCESS,
  MATERIAL_CLOSE_FORM_MODEL,
  MATERIAL_UPDATE_DELETE_ID,
  MATERIAL_GET_SELECT_DATA,
  MATERIAL_UPDATE_SELECT_DATA,
} from "../constant/material";

const initQueryForm = {
  page: 1,
  pageSize: 20,
};

const initFormValues = {};

const initState = {
  isLoading: false,
  dataSource: [],
  count: 0,
  title: "添加物料分类",
  hasEdit: false,
  hasEditLoading: false,
  editInitValues: initFormValues,
  queryForm: initQueryForm,
  needDeleteId: 0,
  selectData: [],
};

export const materialReducer = (state = initState, action) => {
  switch (action.type) {
    case MATERIAL_SEARCH_FROM_CHANGE:
      return { ...state, queryForm: { ...initQueryForm, ...action.value } };
    case MATERIAL_UPDATE_TABLE_DATA:
      return {
        ...state,
        count: action.value.count || 0,
        isLoading: false,
        dataSource: action.value.rows || [],
      };
    case MATERIAL_ON_SEARCH:
      return { ...state, queryForm: { ...state.queryForm, ...action.value }, isLoading: true };
    case MATERIAL_OPEN_FORM_MODEL_TO_ADD:
      return {
        ...state,
        title: "新增基础信息",
        hasEdit: true,
        editInitValues: initFormValues,
      };
    case MATERIAL_OPEN_FROM_MODEL_TO_EDIT:
      return {
        ...state,
        title: "修改基础信息",
        hasEdit: true,
        editInitValues: action.value,
      };
    case MATERIAL_TABLE_ON_DELETE:
      return { ...state, needDeleteId: action.value };
    case MATERIAL_EDIT_FORM_ON_FINISH:
      return {
        ...state,
        editInitValues: { ...state.editInitValues, ...action.value },
      };
    case MATERIAL_EDIT_FORM_ON_SUCCESS:
      return { ...state };
    case MATERIAL_CLOSE_FORM_MODEL:
      return { ...state, hasEdit: false, editInitValues: initFormValues };
    case MATERIAL_UPDATE_DELETE_ID:
      return { ...state, needDeleteId: action.value };
    case MATERIAL_GET_SELECT_DATA:
      return { ...state };
    case MATERIAL_UPDATE_SELECT_DATA:
      return { ...state, selectData: action.value };
    default:
      return state;
  }
};
