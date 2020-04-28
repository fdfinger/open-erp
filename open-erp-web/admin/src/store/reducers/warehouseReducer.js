import {
  WAREHOUSE_ON_SEARCH,
  WAREHOUSE_SEARCH_FROM_CHANGE,
  WAREHOUSE_UPDATE_TABLE_DATA,
  WAREHOUSE_OPEN_FORM_MODEL_TO_ADD,
  WAREHOUSE_OPEN_FROM_MODEL_TO_EDIT,
  WAREHOUSE_TABLE_ON_DELETE,
  WAREHOUSE_EDIT_FORM_ON_FINISH,
  WAREHOUSE_EDIT_FORM_ON_SUCCESS,
  WAREHOUSE_CLOSE_FORM_MODEL,
  WAREHOUSE_UPDATE_DELETE_ID,
  WAREHOUSE_GET_SELECT_DATA,
  WAREHOUSE_UPDATE_SELECT_DATA,
} from "../constant/warehouse";

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

export const warehouseReducer = (state = initState, action) => {
  switch (action.type) {
    case WAREHOUSE_SEARCH_FROM_CHANGE:
      return { ...state, queryForm: { ...initQueryForm, ...action.value } };
    case WAREHOUSE_UPDATE_TABLE_DATA:
      return {
        ...state,
        count: action.value.count || 0,
        isLoading: false,
        dataSource: action.value.rows || [],
      };
    case WAREHOUSE_ON_SEARCH:
      return { ...state, queryForm: { ...state.queryForm, ...action.value }, isLoading: true };
    case WAREHOUSE_OPEN_FORM_MODEL_TO_ADD:
      return {
        ...state,
        title: "新增基础信息",
        hasEdit: true,
        editInitValues: initFormValues,
      };
    case WAREHOUSE_OPEN_FROM_MODEL_TO_EDIT:
      return {
        ...state,
        title: "修改基础信息",
        hasEdit: true,
        editInitValues: action.value,
      };
    case WAREHOUSE_TABLE_ON_DELETE:
      return { ...state, needDeleteId: action.value };
    case WAREHOUSE_EDIT_FORM_ON_FINISH:
      return {
        ...state,
        editInitValues: { ...state.editInitValues, ...action.value },
      };
    case WAREHOUSE_EDIT_FORM_ON_SUCCESS:
      return { ...state };
    case WAREHOUSE_CLOSE_FORM_MODEL:
      return { ...state, hasEdit: false, editInitValues: initFormValues };
    case WAREHOUSE_UPDATE_DELETE_ID:
      return { ...state, needDeleteId: action.value };
    case WAREHOUSE_GET_SELECT_DATA:
      return { ...state };
    case WAREHOUSE_UPDATE_SELECT_DATA:
      return { ...state, selectData: action.value };
    default:
      return state;
  }
};
