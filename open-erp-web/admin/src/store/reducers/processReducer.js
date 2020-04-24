import {
  PROCESS_ON_SEARCH,
  PROCESS_SEARCH_FROM_CHANGE,
  PROCESS_UPDATE_TABLE_DATA,
  PROCESS_OPEN_FORM_MODEL_TO_ADD,
  PROCESS_OPEN_FROM_MODEL_TO_EDIT,
  PROCESS_TABLE_ON_DELETE,
  PROCESS_EDIT_FORM_ON_FINISH,
  PROCESS_EDIT_FORM_ON_SUCCESS,
  PROCESS_CLOSE_FORM_MODEL,
  PROCESS_UPDATE_DELETE_ID,
  PROCESS_GET_SELECT_DATA,
  PROCESS_UPDATE_SELECT_DATA,
} from "../constant/process";

const initQueryForm = {
  page: 1,
  pageSize: 20,
};

const initFormValues = {};

const initState = {
  isLoading: false,
  dataSource: [],
  count: 0,
  title: "新增",
  hasEdit: false,
  hasEditLoading: false,
  editInitValues: initFormValues,
  queryForm: initQueryForm,
  needDeleteId: 0,
  selectData: [],
};

export const processReducer = (state = initState, action) => {
  switch (action.type) {
    case PROCESS_SEARCH_FROM_CHANGE:
      return { ...state, queryForm: { ...initQueryForm, ...action.value } };
    case PROCESS_UPDATE_TABLE_DATA:
      return {
        ...state,
        count: action.value.count || 0,
        dataSource: action.value.rows || [],
      };
    case PROCESS_ON_SEARCH:
      return { ...state, queryForm: { ...state.queryForm, ...action.value } };
    case PROCESS_OPEN_FORM_MODEL_TO_ADD:
      return {
        ...state,
        title: "添加工序",
        hasEdit: true,
        editInitValues: initFormValues,
      };
    case PROCESS_OPEN_FROM_MODEL_TO_EDIT:
      return {
        ...state,
        title: "修改工序",
        hasEdit: true,
        editInitValues: action.value,
      };
    case PROCESS_TABLE_ON_DELETE:
      return { ...state, needDeleteId: action.value };
    case PROCESS_EDIT_FORM_ON_FINISH:
      return {
        ...state,
        editInitValues: { ...state.editInitValues, ...action.value },
      };
    case PROCESS_EDIT_FORM_ON_SUCCESS:
      return { ...state };
    case PROCESS_CLOSE_FORM_MODEL:
      return { ...state, hasEdit: false, editInitValues: initFormValues };
    case PROCESS_UPDATE_DELETE_ID:
      return { ...state, needDeleteId: action.value };
    case PROCESS_GET_SELECT_DATA:
      return { ...state };
    case PROCESS_UPDATE_SELECT_DATA:
      return { ...state, selectData: action.value };
    default:
      return state;
  }
};
