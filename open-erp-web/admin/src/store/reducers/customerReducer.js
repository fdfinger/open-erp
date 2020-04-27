import {
  CUSTOMER_ON_SEARCH,
  CUSTOMER_SEARCH_FROM_CHANGE,
  CUSTOMER_UPDATE_TABLE_DATA,
  CUSTOMER_OPEN_FORM_MODEL_TO_ADD,
  CUSTOMER_OPEN_FROM_MODEL_TO_EDIT,
  CUSTOMER_TABLE_ON_DELETE,
  CUSTOMER_EDIT_FORM_ON_FINISH,
  CUSTOMER_EDIT_FORM_ON_SUCCESS,
  CUSTOMER_CLOSE_FORM_MODEL,
  CUSTOMER_UPDATE_DELETE_ID,
  CUSTOMER_GET_SELECT_DATA,
  CUSTOMER_UPDATE_SELECT_DATA,
} from "../constant/customer";

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

export const customerReducer = (state = initState, action) => {
  switch (action.type) {
    case CUSTOMER_SEARCH_FROM_CHANGE:
      return { ...state, queryForm: { ...initQueryForm, ...action.value } };
    case CUSTOMER_UPDATE_TABLE_DATA:
      return {
        ...state,
        count: action.value.count || 0,
        dataSource: action.value.rows || [],
      };
    case CUSTOMER_ON_SEARCH:
      return { ...state, queryForm: { ...state.queryForm, ...action.value } };
    case CUSTOMER_OPEN_FORM_MODEL_TO_ADD:
      return {
        ...state,
        title: "添加客户",
        hasEdit: true,
        editInitValues: initFormValues,
      };
    case CUSTOMER_OPEN_FROM_MODEL_TO_EDIT:
      return {
        ...state,
        title: "修改客户",
        hasEdit: true,
        editInitValues: action.value,
      };
    case CUSTOMER_TABLE_ON_DELETE:
      return { ...state, needDeleteId: action.value };
    case CUSTOMER_EDIT_FORM_ON_FINISH:
      return {
        ...state,
        editInitValues: { ...state.editInitValues, ...action.value },
      };
    case CUSTOMER_EDIT_FORM_ON_SUCCESS:
      return { ...state };
    case CUSTOMER_CLOSE_FORM_MODEL:
      return { ...state, hasEdit: false, editInitValues: initFormValues };
    case CUSTOMER_UPDATE_DELETE_ID:
      return { ...state, needDeleteId: action.value };
    case CUSTOMER_GET_SELECT_DATA:
      return { ...state };
    case CUSTOMER_UPDATE_SELECT_DATA:
      return { ...state, selectData: action.value };
    default:
      return state;
  }
};
