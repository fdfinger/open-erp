import {
  USER_ON_SEARCH,
  USER_SEARCH_FROM_CHANGE,
  USER_UPDATE_TABLE_DATA,
  USER_OPEN_FORM_MODEL_TO_ADD,
  USER_OPEN_FROM_MODEL_TO_EDIT,
  USER_TABLE_ON_DELETE,
  USER_EDIT_FORM_ON_FINISH,
  USER_EDIT_FORM_ON_SUCCESS,
  USER_CLOSE_FORM_MODEL,
  USER_UPDATE_DELETE_ID,
  USER_GET_SELECT_DATA,
  USER_UPDATE_SELECT_DATA,
} from "../constant/user";

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

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_SEARCH_FROM_CHANGE:
      return { ...state, queryForm: { ...initQueryForm, ...action.value } };
    case USER_UPDATE_TABLE_DATA:
      return {
        ...state,
        count: action.value.count || 0,
        dataSource: action.value.rows || [],
      };
    case USER_ON_SEARCH:
      return { ...state, queryForm: { ...state.queryForm, ...action.value } };
    case USER_OPEN_FORM_MODEL_TO_ADD:
      return {
        ...state,
        title: "新增",
        hasEdit: true,
        editInitValues: initFormValues,
      };
    case USER_OPEN_FROM_MODEL_TO_EDIT:
      return {
        ...state,
        title: "修改",
        hasEdit: true,
        editInitValues: action.value,
      };
    case USER_TABLE_ON_DELETE:
      return { ...state, needDeleteId: action.value };
    case USER_EDIT_FORM_ON_FINISH:
      return {
        ...state,
        editInitValues: { ...state.editInitValues, ...action.value },
      };
    case USER_EDIT_FORM_ON_SUCCESS:
      return { ...state };
    case USER_CLOSE_FORM_MODEL:
      return { ...state, hasEdit: false, editInitValues: initFormValues };
    case USER_UPDATE_DELETE_ID:
      return { ...state, needDeleteId: action.value };
    case USER_GET_SELECT_DATA:
      return { ...state };
    case USER_UPDATE_SELECT_DATA:
      return { ...state, selectData: action.value };
    default:
      return state;
  }
};
